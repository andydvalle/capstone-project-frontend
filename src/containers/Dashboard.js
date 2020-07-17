import React, {Component} from 'react';
import ConditionForm from '../components/ConditionForm'

class Dashboard extends Component {


    handleClick = () => {
        this.props.onSignout()
    }
    
    render(){

        return(
            <div>
                {this.props.user.username} Hi from dashboard
                <ConditionForm />
            </div>
        )
    }
}

export default Dashboard;