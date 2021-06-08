const ACTION_ADD_VIN_CONTEXT = "ADD_VIN_CONTEXT";

const initialState = {
  vehicleVin: "",
  vehicleInfo: "",
};

export class Actions {
  static addVinContext = ({ vehicleVin, vehicleInfo }) => ({
    type: ACTION_ADD_VIN_CONTEXT,
    payload: { vehicleInfo, vehicleVin },
  });
}

export function reduce(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_ADD_VIN_CONTEXT: {
      return {
        ...state,
        vehicleVin: payload.vehicleVin,
        vehicleInfo: payload.vehicleInfo,
      };
    }

    default:
      return state;
  }
}
