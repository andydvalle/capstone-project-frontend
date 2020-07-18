import React, { Component } from "react";
import ConditionForm from "../components/ConditionForm"

class FormModal extends Component {
  render() {
    return (
      // <div className="temp-border">
      // Hi from FormModal

      <div class="main_content">
          <button
            type="button"
            id="add-form"
            class="btn btn-info"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            +
          </button>

          <div
            class="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                
              <ConditionForm /> 
                ...
              </div>
            </div>
          </div>
        </div>

      // </div>
    );
  }
}

export default FormModal;