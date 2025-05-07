/**
 * 프로젝트에 사용 중인 모든 리듀서 결합
 */

import { combineReducers } from "redux";
import { statueReducer } from "./StatueReducer";
import { busReducer } from "./busReducer";
import { kioskReducer } from "./kioskReducer";
import { mainCharReducer } from "./mainCharReducer";
import { mapReducer } from "./mapReducer";
import { viewReducer } from "./viewReducer";
import { miniMapReducer } from "./miniMapReducer";
import { modalReducer } from "./modalReducer";
import { sideMenuReducer } from "./sideMenuReducer";
import { smokingAreaReducer } from "./smokingAreaReducer";
import { deptInfoReducer } from "./deptInfoReducer";
import { codingAreaReducer } from "./codingAreaReducer";
import { guideReducer } from "./guideReducer";
import { deptHeadAnimationReducer } from "./deptHeadAnimationReducer";
import { goldBoxReducer } from "./goldBoxReducer";

// 모든 리듀서 결합 - 성준
const rootReducer = combineReducers({
  // 성준
  sideMenu: sideMenuReducer,
  groundMap: mapReducer,
  modal: modalReducer,
  mChar: mainCharReducer,
  view: viewReducer,
  kiosk: kioskReducer,
  teleport: miniMapReducer,
  deptInfo: deptInfoReducer,
  guide: guideReducer,
  deptHeadAni: deptHeadAnimationReducer,

  // 석재
  smokingArea: smokingAreaReducer,

  // 자현
  bus: busReducer,
  codingArea: codingAreaReducer,
  goldBox: goldBoxReducer,

  // 정민
  statue: statueReducer,
});

export default rootReducer;
