import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames/bind'


import {
    fetchListTasks,
    deleteTask,
    updateTask,
    toggleDoneStatus,
    taskPositionUp,
    taskPositionDown,
    onEditTaskStart,
    onEditTaskFinish
} from '../../actions'

import {
    getTasksOfList,
    getEditingTask, getAuthInfo,
} from "../../selectors";


export class TasksOfList extends Component {
    constructor(props) {
        super(props)
        this.state = {isDone: false}
        this.state = {isEditing: false}
        this.state = {editedContent: ''}
    }

    componentWillMount () {
        this.props.fetchListTasks(this.props.listId) //param
    }

    deleteTask = (id) => this.props.deleteTask(id)
    changeDoneStatus = (id) => this.props.toggleDoneStatus(id)
    moveUp = (taskId, position) => (this.props.tasks.length > 1 && position > 1) ? this.props.taskPositionUp(taskId) : null
    moveDown = (taskId, position) => (this.props.tasks.length > 1 && position < this.props.tasks.length) ? this.props.taskPositionDown(taskId) : null
    editTask = (task) => {
        this.props.onEditTaskStart(task)
        this.setState({'isEditing': true})
    }
    changeTaskContent(event) {this.setState({editedContent: event.target.value})}

    handleEnterKeyDown(event) {
        const ENTER_KEY_CODE = 13
        if (event.keyCode === ENTER_KEY_CODE) {
            this.editTaskComplete()
        }
    }
    editTaskComplete() {
        if (this.state.editedContent) {
            this.props.updateTask(this.props.editingTask, this.state.editedContent)
        }
        this.setState({'isEditing': false, 'editedContent': ''})
        this.props.onEditTaskFinish(this.state.editedContent)
    }

    renderTask(task){
        const {editingTask} = this.props

        let editField = null
        if (this.state.isEditing) {
            editField =
                    <input className="w3-input w3-border editField"
                           autoFocus={true}
                           type="text"
                           defaultValue={task.content}
                           onChange={this.changeTaskContent.bind(this)}
                           onKeyDown={this.handleEnterKeyDown.bind(this)}
                           onBlur={this.editTaskComplete.bind(this)}
                    />
        }
        let renderContent = (this.state.isEditing && editingTask.id === task.id) ? editField : task.content

        return(
            <div
                className = {
                    classNames("w3-cell-row", "w3-border-left", "w3-border-right", "w3-border-bottom", "lst-task-item",
                        {'lst-last-item': task.position === this.props.tasks.length})
                }
                key={task.id}
            >

                <div className="w3-container w3-cell w3-cell-middle checkbox-wraper" >
                    <input
                        type="checkbox"
                        defaultChecked={task.is_done}
                        onChange={this.changeDoneStatus.bind(this, task.id)}
                    />
                </div>

                <div className="w3-cell w3-border-right w3-border-left lst-divide-cell"> </div>


                <div className="w3-container w3-cell w3-cell-middle w3-border-right lst-taskcontent"
                     onDoubleClick={this.editTask.bind(this, task)}
                >
                    <p className = {classNames({'line-through-text': task.is_done && editingTask.id !== task.id})}>
                        {renderContent}
                    </p>
                </div>


                <div className="w3-container w3-cell w3-cell-middle w3-center w3-xlarge lst-icon">
                    <div className="arrow-up"
                         onClick={this.moveUp.bind(this, task.id, task.position)}> </div>
                    <div className="arrow-down"
                         onClick={this.moveDown.bind(this, task.id, task.position)}> </div>
                </div>
                <div className="w3-container w3-cell w3-cell-middle w3-center lst-icon">
                    <div className="w3-border-right w3-border-left w3-xlarge">
                        <i className="fa fa-pencil w3-hover-text-black btn-edit"
                           onClick={this.editTask.bind(this, task)}
                        > </i>
                    </div>
                </div>
                <div className="w3-container w3-cell w3-cell-middle w3-xlarge w3-center lst-icon">
                    <i className="fa fa-trash-o w3-hover-text-red btn-delete"
                       onClick={this.deleteTask.bind(this, task.id)}> </i>
                </div>

            </div>
        )
    }

    render() {
        const {tasks} = this.props

        return (
            <div>
                {tasks.map((task) => this.renderTask(task))}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        tasks: getTasksOfList(state, ownProps.listId),
        editingTask: getEditingTask(state),
        authInfo: getAuthInfo(state),

    }
}

const mapDispatchToProps = {
    fetchListTasks,
    deleteTask,
    updateTask,
    toggleDoneStatus,
    taskPositionUp,
    taskPositionDown,
    onEditTaskStart,
    onEditTaskFinish,
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksOfList)