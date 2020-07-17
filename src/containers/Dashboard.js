import React, {Component} from 'react';
import FormModal from './FormModal'

class Dashboard extends Component {
    
    handleClick = () => {
        this.props.onSignout()
    }
    
    render(){

        return(
            <div>
                {this.props.user.username} Hi from dashboard
                <div>
                    {/* <FormModal /> */}
                </div>
            </div>
        )
    }
}

export default Dashboard;