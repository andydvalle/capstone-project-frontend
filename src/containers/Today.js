import React, { useState } from "react";
import TodayChecklist from '../components/TodayChecklist'

const Today = (props) => {
  const weekday = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    var n = weekday[d.getDay()];
    return n;
  };

  const [day, setDay] = useState(weekday());

  const renderMeds = () => {
    return props.foundProfile.medications.map((medication) => {
      return Object.keys(medication).map((key) => {
        if (key === day) {
          if (key) {
              return <TodayChecklist key={medication.id} medication={medication}/>
            // console.log(key);
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
