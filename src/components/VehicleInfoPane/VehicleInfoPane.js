import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/CustomTaskListState";
import CustomTaskList from "./VehicleInfoPane";

const mapStateToProps = (state) => ({
  vehicleVin: state["props-test"].customTaskList.vehicleVin,
  vehicleInfo: state["props-test"].customTaskList.vehicleInfo,
});

const mapDispatchToProps = (dispatch) => ({
  addVinContext: bindActionCreators(Actions.addVinContext, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTaskList);
