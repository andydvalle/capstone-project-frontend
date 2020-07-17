import React, {Component} from 'react';
// import ConditionForm from '../components/ConditionForm'
import FormModal from './FormModal'

class Dashboard extends Component {


    handleClick = () => {
        this.props.onSignout()
    }
    
    render(){

        return(
            <div className="temp-border">
                {this.props.user.username} Hi from dashboard
                <FormModal />
            </div>
        )
    }
}

export default Dashboard;