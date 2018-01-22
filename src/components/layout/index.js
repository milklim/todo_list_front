import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {isAuthCookieExist} from '../../cookies/index'

import {
    userSignOut,
    validateToken,
    resetTokenValidation,
} from '../../actions/index'

import {
    getAuthInfo
} from "../../selectors";


export class Layout extends Component {

    componentWillMount(){
        if(isAuthCookieExist()) {
            this.props.validateToken();
        } else {
            this.props.resetTokenValidation();
        }
    }

    renderSignBtns = () => {
            if (this.props.authInfo.isAuthenticate)
                return (
                    <button className="w3-bar-item w3-button w3-right sign-out" onClick={this.props.userSignOut}>
                        Log out
                    </button>
                )
            else return (
                    <div>
                        <Link to={"/sign_in"} className="w3-bar-item w3-button w3-right">Sign In</Link>
                        <Link to={"/sign_up"} className="w3-bar-item w3-button w3-right">Registration</Link>
                    </div>
                )
    }
    render() {
        if (this.props.authInfo.tokenValidating)
            return <div className='loader w3-center'>Loading...</div>
        else return (
            <div className="w3-content">
                <div className="w3-bar w3-border w3-light-grey ">
                    <span className="w3-bar-item usr-name">User: {this.props.authInfo.userName}</span>
                    {this.renderSignBtns()}
                </div>
                {this.props.children}
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
    userSignOut,
    validateToken,
    resetTokenValidation,
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout)