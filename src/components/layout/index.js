import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {
    userSignOut
} from '../../actions/index'


export class Layout extends Component {

    renderSignBtns = () => {
            if (this.props.isLoggedIn)
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
        return (
            <div className="w3-content">

                <div className="w3-bar w3-border w3-light-grey ">
                    <span className="w3-bar-item usr-name">User: {this.props.userName}</span>

                    {this.renderSignBtns()}

                </div>

                    {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        isLoggedIn: state.auth.isAuthenticate
    }
}

const mapDispatchToProps = {
    userSignOut,
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout)