import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from "react-router";

import {
    userSignIn
} from '../../actions'

import {getAuthInfo} from "../../selectors";

export class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {'email': ''}
        this.state = {'password': ''}

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
    }

    handleChangeEmail(event) { this.setState({email: event.target.value}) }
    handleChangePass(event) { this.setState({password: event.target.value}) }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authInfo.isAuthenticate)
            browserHistory.replace('/')
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.userSignIn(this.state.email, this.state.password)
    }

    render(){

        return(
            <div className="w3-padding w3-center w3-card-4 sign-forms">
                <div className="w3-container w3-blue">
                    <h2>Sign In</h2>
                </div>

                <form className="w3-container"
                      onSubmit={this.signIn.bind(this)}
                >
                    <p>
                        <label>E-mail</label>
                        <input className="w3-input"
                               type="email"
                               onChange = { this.handleChangeEmail }
                               value={this.state.email}
                        />
                    </p>
                    <p>
                        <label>Password</label>
                        <input className="w3-input"
                               type="password"
                               onChange = { this.handleChangePass }
                               value={this.state.password}
                        />
                    </p>

                    <p>
                        <button className="w3-btn w3-ripple w3-green">Ok</button>
                    </p>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authInfo: getAuthInfo(state)
    }
}
const mapDispatchToProps = {
    userSignIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)