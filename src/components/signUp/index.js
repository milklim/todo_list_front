import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router';

import {
    userSignUp
} from '../../actions'
import {getAuthInfo} from '../../selectors'
import classNames from "classnames/bind";

export class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            'email': '',
            'password': '',
            'password_confirmation': ''
        }
        this.state = {
            'emailErr': false,
            'passErr': false, 'passErrMsg': '',
            'confPassErr': false
        }
    }


    handleChangeEmail = (event) => { this.setState({email: event.target.value}) }
    handleChangePass = (event) => { this.setState({password: event.target.value}) }
    handleChangePassConf = (event) => {
        this.setState({password_confirmation: event.target.value});
        ( (this.state.password) && (this.state.password.indexOf(event.target.value, 0) < 0) )
            ? this.setState({confPassErr: true})
            : this.setState({confPassErr: false});
    }
    validateEmail = (event) => { this.state.email ? this.setState({emailErr: false}) : this.setState({emailErr: true})}
    validatePass = (event) => {
        (!this.state.password)
            ? this.setState({passErr: true, passErrMsg: 'password is required'})
            : (this.state.password.length < 8)
                ? this.setState({passErr: true, passErrMsg: 'password must have at least 8 characters'})
                : this.setState({passErr: false, passErrMsg: ''})
    }


    componentWillMount(){
        if (this.props.authInfo.isAuthenticate)
            browserHistory.replace('/')
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.authInfo.isAuthenticate)
            browserHistory.replace('/')
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.userSignUp(this.state.email, this.state.password, this.state.password_confirmation)
    }

    render(){
        const {passErr, passErrMsg, confPassErr, emailErr, email, password, password_confirmation} = this.state
        return(
            <div className="w3-padding w3-center w3-card-4 sign-forms">
                <div className="w3-container w3-blue">
                    <h2>Registration</h2>
                </div>

                <div className={ classNames("w3-red", "validation-err-wrap", {'sign-in-err': this.props.authInfo.isAuthErr}) }>
                    Incorrect email or password
                </div>

                <form className="w3-container"
                      onSubmit={this.signUp}>
                    <div>
                        <label>E-mail</label>
                        {emailErr &&
                        <div className={ classNames("validation-err-wrap", {'sign-in-err': emailErr }) }>
                            email is required
                        </div>}
                        <input className="w3-input"
                               type="email"
                               placeholder="Enter your email"
                               onChange = { this.handleChangeEmail }
                               onBlur={ this.validateEmail }
                        />
                    </div>


                    <div>
                        <label>Password</label>
                        {passErrMsg &&
                        <div className={ classNames("validation-err-wrap", {'sign-in-err': passErr }) }>
                            { passErrMsg }
                        </div>}
                        <input className="w3-input pass"
                               type="password"
                               placeholder="Password: 8 chars minimum"
                               onChange = { this.handleChangePass }
                               onBlur={ this.validatePass }
                        />
                    </div>


                    <div>
                        <label>Confirm Password</label>
                        {confPassErr &&
                        <div className={ classNames("validation-err-wrap", {'sign-in-err': confPassErr }) }>
                            passwords do not match
                        </div>}
                        <input className="w3-input pass-confirm"
                               type="password"
                               placeholder="Confirm Password"
                               onChange={ this.handleChangePassConf }
                        />
                    </div>
                    <p>
                        <button
                            className="w3-btn w3-ripple w3-green"
                            disabled = {passErr || confPassErr || emailErr
                                        || !email || !password || !password_confirmation}
                        >
                            Register
                        </button>
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