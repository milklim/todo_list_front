import React, {Component} from 'react'
import {connect} from "react-redux";

import {
    onEditListStart,
    onEditListFinish,
    deleteList,
    updateList,
} from '../../actions'
import {
    getEditingList,
} from '../../selectors'


class ListHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {isEditing: false}
        this.state = {editingName: ''}
    }

    deleteList = (id) => this.props.deleteList(id)

    onChangeName(event) {this.setState({'editingName': event.target.value})}
    editList = (list) => {
        this.props.onEditListStart(list)
        this.setState({'isEditing': true})
    }
    handleEnterKeyDown(event) {
        const ENTER_KEY_CODE = 13
        if (event.keyCode === ENTER_KEY_CODE) {
            this.editListComplete()
        }
    }
    editListComplete(){
        if (this.state.editingName) {
            this.props.updateList(this.props.editingList, this.state.editingName)
        }
        this.setState({'isEditing': false, 'editingName': ''})
        this.props.onEditListFinish(this.state.editingName)
    }


    render(){
        const list = this.props.list
        const {editingList} = this.props

        let editField = null
        if (this.state.isEditing) {
            editField =
                <input className="w3-input w3-border editField"
                       autoFocus={true}
                       type="text"
                       defaultValue={list.label}
                       onChange={this.onChangeName.bind(this)}
                       onKeyDown={this.handleEnterKeyDown.bind(this)}
                       onBlur={this.editListComplete.bind(this)}
                />
        }
        let renderName = (this.state.isEditing && editingList.id === list.id) ? editField : <h4>{list.label}</h4>

        return(
                <div className='w3-cell-row w3-flat-belize-hole lst-header'>

                    <div className="w3-container w3-cell w3-cell-middle lst-icon-main">
                        <i className="fa fa-calendar"></i>
                    </div>

                    <div className="w3-container w3-cell w3-cell-left lst-title"
                         onDoubleClick={this.editList.bind(this, list)}
                    >
                        {renderName}
                    </div>

                    <div className="w3-container w3-cell w3-cell-middle w3-xlarge w3-hover-text-dark-grey lst-icon">
                        <i className="fa fa-pencil"
                           onClick={this.editList.bind(this, list)}
                        ></i>
                    </div>
                    <div className="w3-container w3-cell w3-cell-middle w3-padding w3-xlarge lst-icon">
                        <i className="fa">|</i>
                    </div>
                    <div className="w3-container w3-cell w3-cell-middle w3-xlarge w3-hover-text-deep-orange lst-icon">
                        <i className="fa fa-trash-o"
                           onClick={this.deleteList.bind(this, list.id)}
                        ></i>
                    </div>

                </div>
        )
    }
}

const mapDispatchToProps = {
    deleteList,
    onEditListStart,
    onEditListFinish,
    updateList,
}

const mapStateToProps = (state) => {
    return {
        editingList: getEditingList(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader)