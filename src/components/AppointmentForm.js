import React from "react";
import useFormInput from "../FormInput";

const AppointmentForm = () => {
  
    const condition = useFormInput("")
  
    return (
        <div className="temp-border">
        Hi from AppointmentForm
            <form>
                <label>Condition:</label>
                <input {...condition}/>
            </form>
        </div>
    )
};

export default AppointmentForm;
