import React, {Component} from 'react';

class ConditionForm extends Component {
    render(){
        return(
            <div>
                Hi from ConditionForm
                <form>
                    <label>Condition Name:</label>
                    <input type="text" name="name" />
                    <input type="hidden" name="user"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ConditionForm;