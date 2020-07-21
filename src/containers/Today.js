import React, { useState } from "react";

const Today = (props) => {
  const weekday = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    return n;
  };

  const [day, setDay] = useState(weekday());

  return (
    <div className="main_content">
      hi from today.js {props.foundProfile.firstName}
      {/* {renderTodayMeds()} */}
    </div>
  );
};

export default Today;
