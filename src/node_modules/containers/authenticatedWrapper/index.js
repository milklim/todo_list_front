import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

class AuthenticatedWrapper extends Component {
    componentDidMount() {
        if (!this.props.isLoggedIn) {
            browserHistory.replace("/sign_in")
        }
    }

    render() {
        if (this.props.isLoggedIn) {
            return this.props.children
        } else {
            return <div>{browserHistory.replace("/sign_in")}</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isAuthenticate
    }
}


export default connect(mapStateToProps, null)(AuthenticatedWrapper)