import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router';

import {
    userSignUp
} from '../../actions'
import {getAuthInfo} from '../../selectors'

export class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {'email': ''}
        this.state = {'password': ''}
        this.state = {'password_confirmation': ''}

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
        this.handleChangePassConf = this.handleChangePassConf.bind(this)
    }

    handleChangeEmail(event) { this.setState({email: event.target.value}) }
    handleChangePass(event) { this.setState({password: event.target.value}) }
    handleChangePassConf(event) { this.setState({password_confirmation: event.target.value}) }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authInfo.isAuthenticate)
            browserHistory.replace('/')
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.userSignUp(this.state.email, this.state.password, this.state.password_confirmation)
    }

    render(){

        return(
            <div className="w3-padding w3-center w3-card-4 sign-forms">
                <div className="w3-container w3-blue">
                    <h2>Registration</h2>
                </div>

                <form className="w3-container"
                      onSubmit={this.signUp.bind(this)}
                >
                    <p>
                        <label>E-mail</label>
                        <input className="w3-input"
                               type="email"
                               onChange = { this.handleChangeEmail }
                        />
                    </p>
                    <p>
                        <label>Password</label>
                        <input className="w3-input pass"
                               type="password"
                               onChange = { this.handleChangePass }
                        />
                    </p>
                    <p>
                        <label>Password confirm</label>
                        <input className="w3-input pass-confirm"
                               type="password"
                               onChange={ this.handleChangePassConf }
                        />
                    </p>
                    <p>
                        <button className="w3-btn w3-ripple w3-green">Register</button>
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
    userSignUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)