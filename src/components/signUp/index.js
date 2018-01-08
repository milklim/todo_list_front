import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router';

import {
    userSignUp
} from '../../actions'
import {getAuthInfo} from '../../selectors'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {'email': ''}
        this.state = {'password': ''}
        this.state = {'password_confirmation': ''}
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
                               type="text"
                               onChange = { (e) => this.setState({'email': e.target.value}) }
                        />
                    </p>
                    <p>
                        <label>Password</label>
                        <input className="w3-input"
                               type="password"
                               onChange = { (e) => this.setState({'password': e.target.value}) }
                        />
                    </p>
                    <p>
                        <label>Password confirm</label>
                        <input className="w3-input"
                               type="password"
                               onChange={ (e) => this.setState({'password_confirmation': e.target.value }) }
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