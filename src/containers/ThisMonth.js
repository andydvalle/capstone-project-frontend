import React from "react";
import Calendar from "../components/Calendar";

const ThisMonth = (props) => {
  return (
    <div className="main_content">
      <div className="header">Month Schedule</div>
      Hi from thisMonth
      <Calendar />
    </div>
  );
};

export default ThisMonth;
