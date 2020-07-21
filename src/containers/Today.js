import React, { useState } from "react";

const Today = (props) => {
  const weekday = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "onSun";
    weekday[1] = "onMon";
    weekday[2] = "onTue";
    weekday[3] = "onWed";
    weekday[4] = "onThu";
    weekday[5] = "onFri";
    weekday[6] = "onSat";

    var n = weekday[d.getDay()];
    return n;
  };

  const [day, setDay] = useState(weekday());

  const renderMeds = () => {
    props.foundProfile.medications.map((medication) => {
      Object.keys(medication).map((key) => {
        if (key === day) {
          if (key) {
            console.log(key);
          } else {
            return null;
          }
        } else {
          return null;
        }
      });
    });
  };

  return (
    <div className="main_content">
      Today's Schedule {props.foundProfile.firstName}
      <div>Medications</div>
      {renderMeds()}
    </div>
  );
};

export default Today;
