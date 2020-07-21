import React from "react";

const ProfileInfo = (props) => {
  return (
    <div className="main_content">
      <div className="header">{props.foundProfile.firstName}</div>
    </div>
  );
};

export default ProfileInfo;
