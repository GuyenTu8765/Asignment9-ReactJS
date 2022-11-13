import { DECREMENTED, INCREMENTED } from "../actionType";

export const incrementedAction = () => {
  return {
    type: INCREMENTED,
  };
};

export const decrementedAction = () => {
  return {
    type: DECREMENTED,
  };
};
