import React, {Component} from 'react'
import {connect} from "react-redux";

import {
    createTask,
    fetchListTasks
} from '../../actions'

class NewTaskSection extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        if (this.state.value.length > 0) {
            this.props.createTask(this.state.value, this.props.listId)
            this.refs.txtField.value = ''
            this.setState({value: ''})
        }
    }

    render(){
        return(
            <div className="w3-cell-row lst-add-task-section">

                <div className="w3-container w3-cell w3-cell-middle w3-text-green w3-xxlarge lst-icon">
                    <i className="fa fa-plus"></i>
                </div>

                <form className="w3-container w3-bar w3-cell w3-cell-middle " onSubmit={this.handleSubmit}>
                    <div className=" w3-bar-item lst-input-wrapper">
                        <input className="w3-input w3-border"
                               type="text"
                               placeholder="Start typing here to create a task..."
                               onChange={this.handleChange}
                               // onClick={this.handleClick}
                               ref = 'txtField'
                        />
                    </div>

                    <div className="w3-bar-item lst-btn">
                        <button className="w3-btn w3-ripple w3-flat-nephritis">Add Task</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    createTask,
    fetchListTasks
}

export default connect(null, mapDispatchToProps)(NewTaskSection)