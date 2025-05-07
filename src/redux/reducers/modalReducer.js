/** 임성준
 * 모달 리듀서
 */
import { INIT_MODAL } from "../actions/actions";

const initialState = {
  value: false,
  name: "",
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_MODAL:
      return {
        ...state,
        value: false,
        name: "",
      };
    default:
      return state;
  }
}
