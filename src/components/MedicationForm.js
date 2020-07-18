import React from "react";
import useFormInput from "../FormInput";

const MedicationForm = () => {
  
    const condition = useFormInput("")
  
    return (
        <div className="temp-border">
        Hi from MedicationForm
            <form>
                <label>Condition:</label>
                <input {...condition}/>
            </form>
        </div>
    )
};

export default MedicationForm;
