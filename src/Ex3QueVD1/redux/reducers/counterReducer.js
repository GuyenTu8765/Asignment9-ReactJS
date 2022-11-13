import { INCREMENTED } from "../actionType";
import { DECREMENTED } from "../actionType";

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTED:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENTED:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
