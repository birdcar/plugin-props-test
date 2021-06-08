import React from "react";

import { VehicleInfoPaneComponentStyles } from "./VehicleInfoPane.Styles";

// It is recommended to keep components stateless and use redux for managing states
const CustomTaskList = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <VehicleInfoPaneComponentStyles>
      This is a dismissible demo component
      <i className="accented" onClick={props.dismissBar}>
        close
      </i>
    </VehicleInfoPaneComponentStyles>
  );
};

export default CustomTaskList;
