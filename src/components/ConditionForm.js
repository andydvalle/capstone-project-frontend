import React from "react";
import useFormInput from "../FormInput";

const ConditionForm = () => {
  
    const condition = useFormInput("")
  
    return (
        <div>
            Hi from ConditionForm
            <form>
                <label>Condition:</label>
                <input {...condition}/>
            </form>
        </div>
    )
};

export default ConditionForm;
