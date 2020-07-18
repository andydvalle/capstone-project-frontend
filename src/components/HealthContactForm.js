import React from "react";
import useFormInput from "../FormInput";

const HealthContactForm = () => {
  
    const condition = useFormInput("")
  
    return (
        <div className="temp-border">
        Hi from HealthContactForm
            <form>
                <label>Condition:</label>
                <input {...condition}/>
            </form>
        </div>
    )
};

export default HealthContactForm;
