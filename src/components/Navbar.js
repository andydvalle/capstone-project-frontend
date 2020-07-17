import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

    handleSignout = () => {
        this.props.onHandleSignout()
    }

    render(){
        const currentUser = this.props.currentUser
        const loggedIn = !!this.props.currentUser.id


        return(
            <div>
                Navbar
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login"><div onClick={this.handleSignout}>Signout</div></Link>
                </div>
            </div>
        )
    }
}

export default Navbar;