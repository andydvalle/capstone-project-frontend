import React, {Component} from 'react';

class Dashboard extends Component {
    
    handleClick = () => {
        this.props.onSignout()
    }
    
    render(){
        return(
            <div>
                Hi from dashboard
                <button onClick={this.handleClick}>Sign Out</button>
            </div>
        )
    }
}

export default Dashboard;