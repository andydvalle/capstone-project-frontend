import React from "react";

const DashboardHeader = (props) => {
  return (
    <div>
      Hi,{" "}
      {props.currentUser.charAt(0).toUpperCase() + props.currentUser.slice(1)}!
      Select a profile to view
    </div>
  );
};

export default DashboardHeader;
