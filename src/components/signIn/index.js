import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from "react-router";

import {
    userSignIn
} from '../../actions'

import {getAuthInfo} from "../../selectors";


export class SignIn extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.authInfo.isAuthenticate)
            browserHistory.replace('/')
    }
    componentWillMount(){
        if (this.props.authInfo.isAuthenticate)
            browserHistory.replace('/')
    }

    signIn = (event) => {
        this.props.userSignIn(event.target[0].value, event.target[1].value)
        event.preventDefault()
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
                        />
                    </p>
                    <p>
                        <label>Password</label>
                        <input className="w3-input"
                               type="password"
                               onChange = { this.handleChangePass }
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