import { INC_NUM, DEC_NUM } from "./actions";

const num = 0;

const reducer = (state = { num }, action) => {
  switch (action.type) {
    case INC_NUM:
      return { num: state.num + 1 };
    case DEC_NUM:
      return { num: state.num - 1 };
    default:
      return { ...state };
  }
};

export default reducer;
