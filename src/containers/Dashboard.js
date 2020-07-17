import React, {Component} from 'react';

class Dashboard extends Component {


    handleClick = () => {
        this.props.onSignout()
    }
    
    render(){

        return(
            <div>
                {this.props.user.username} Hi from dashboard
            </div>
        )
    }
}

export default Dashboard;