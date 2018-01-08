import React, {Component} from 'react'
import {connect} from 'react-redux'

import TasksOfList from '../tasksOfList'
import NewTaskSection from '../newTaskSection'
import ListHeader from '../listHeader'
import {
    fetchLists,
    createList,
    deleteList,
} from '../../actions'

import {
    getLists
} from '../../selectors'

class Tasklists extends Component {

    componentDidMount () {
        this.props.fetchLists()
    }

    createList = (name) => this.props.createList(name)

    renderList(list){
        return (
            <div className="w3-card-4 lst-container"  key={list.id}>
                <ListHeader list = {list}/>

                <NewTaskSection listId = {list.id} />

                <TasksOfList listId = {list.id} />
            </div>
        )
    }

    render() {
        const {lists} = this.props
        return (
            <div>
                <div className="w3-container w3-center">
                    <h1>ToDo List</h1>
                </div>

                {lists.map((list) => this.renderList(list))}

                <div className="w3-container w3-padding-16 w3-center">
                    <button
                        className="w3-btn w3-round w3-ripple w3-flat-nephritis"
                        onClick={this.createList.bind(this, 'New Tasklist')}
                    >
                        Add List
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lists: getLists(state)
    }
}

const mapDispatchToProps = {
    fetchLists,
    createList,
    deleteList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasklists)