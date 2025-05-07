/** 임성준
 * 사이드 메뉴 리듀서
 */
import { INIT_SIDE_MENU, SIDE_MENU_DEPT_REC } from "../actions/actions";

const initialState = {
  value: false,
  name: "",
};

export function sideMenuReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SIDE_MENU:
      return {
        ...state,
        value: false,
        name: "",
      };
    case SIDE_MENU_DEPT_REC:
      return {
        ...state,
        value: !state.value,
        name: "deptRec",
      };
    default:
      return state;
  }
}
