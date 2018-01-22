import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from "react-router";

import {
    userSignIn
} from '../../actions'

import {getAuthInfo} from "../../selectors";
import classNames from "classnames/bind";


export class SignIn extends Component {

    signIn = (event) => {
        this.props.userSignIn(event.target.elements["email"].value, event.target.elements["password"].value)
        event.preventDefault()
    }

    render(){

        return(
            <div className="w3-padding w3-center w3-card-4 sign-forms">
                <div className="w3-container w3-blue">
                    <h2>Sign In</h2>
                </div>
                <div className={ classNames("w3-red", "validation-err-wrap", {'sign-in-err': this.props.authInfo.isAuthErr}) }>
                    Incorrect email or password
                </div>
                <form className="w3-container"
                      onSubmit={this.signIn.bind(this)}
                >
                    <p>
                        <label>E-mail</label>
                        <input className="w3-input"
                               type="email"
                               name="email"
                               placeholder="Enter your email"
                               // onChange = { this.handleChangeEmail }
                        />
                    </p>
                    <p>
                        <label>Password</label>
                        <input className="w3-input"
                               type="password"
                               name="password"
                               placeholder="Password: 8 chars minimum"
                               // onChange = { this.handleChangePass }
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
        authInfo: getAuthInfo(state),
    }
}
const mapDispatchToProps = {
    userSignIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)