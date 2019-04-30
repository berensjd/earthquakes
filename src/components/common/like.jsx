import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = ({ liked, onClick }) => {
  let likedIcon = ["far", "heart"];
  likedIcon[0] = liked ? "fas" : "far";
  return (
    <FontAwesomeIcon
      onClick={onClick}
      style={{ cursor: "pointer" }}
      icon={likedIcon}
    />
  );
};

export default Like;
