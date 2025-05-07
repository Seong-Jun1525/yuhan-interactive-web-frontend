// 파일 생성자 : 임성준

// 캐릭터 - 성준
export const INIT_CHARACTER = "INIT_CHARACTER";
export const MAIN_CHARACTER = "MAIN_CHARACTER";
export const MAIN_CHARACTER_DEPT = "MAIN_CHARACTER_DEPT";

// 미니맵 - 성준
export const INIT_MINI_MAP_TELEPORT = "INIT_MINI_MAP_TELEPORT";
export const MINI_MAP_TELEPORT = "MINI_MAP_TELEPORT";

// 애니메이션
export const INIT_NPC_ANIMATION = "INIT_NPC_ANIMATION";
export const NPC_ANI_MOVE = "NPC_ANI_MOVE";
export const NPC_ANI_HANDS_UP = "NPC_ANI_HANDS_UP";

// 클라이언트 사이드 메뉴 - 성준
export const INIT_SIDE_MENU = "INIT_SIDE_MENU";
export const SIDE_MENU_DEPT_REC = "SIDE_MENU_DEPT_REC";

// 맵 - 성준
export const YH_MAP = "YH_MAP";
export const DEPT_MAP = "DEPT_MAP";
export const COMPUTER_SOFTWARE_MAP = "COMPUTER_SOFTWARE_MAP";
export const INDUSTRIAL_DESIGN_MAP = "INDUSTRIAL_DESIGN_MAP";
export const FOOD_NUTRITION_MAP = "FOOD_NUTRITION_MAP";
export const YUHAN_LIFE_BIO_MAP = "YUHAN_LIFE_BIO_MAP";

// 가이드
export const INIT_GUIDE = "INIT_GUIDE";
export const GUIDE_WELCOME = "GUIDE_WELCOME";
export const GUIDE_TV = "GUIDE_TV";
export const GUIDE_STATUE = "GUIDE_STATUE";

// 모달 - 성준
export const INIT_MODAL = "INIT_MODAL";

// 키오스크 - 성준
export const INIT_KIOSK = "INIT_KIOSK";
export const KIOSK_PYEONGHWA_ONE = "KIOSK_PYEONGHWA_ONE";
export const KIOSK_PYEONGHWA_TWO = "KIOSK_PYEONGHWA_TWO";
export const KIOSK_BONGSA = "KIOSK_BONGSA";
export const KIOSK_JAYU = "KIOSK_JAYU";
export const KIOSK_STUDENT_CAFETERIA = "KIOSK_STUDENT_CAFETERIA";
export const KIOSK_NANUM = "KIOSK_NANUM";
export const KIOSK_CHANGJO = "KIOSK_CHANGJO";
export const KIOSK_MEMORIAL_HALL = "KIOSK_MEMORIAL_HALL";
export const KIOSK_YUJAELA = "KIOSK_YUJAELA";

// 학과체험 맵 학과소개 - 성준
export const INIT_DEPT_INFO = "INIT_DEPT_INFO";
export const DEPT_INFO_EDU_GOALS = "DEPT_INFO_EDU_GOALS";
export const DEPT_INFO_MAIN_EDU_FIELDS = "DEPT_INFO_MAIN_EDU_FIELDS";
export const DEPT_INFO_CAREER_EMPLOYMENT_FIELD = "DEPT_INFO_CAREER_EMPLOYMENT_FIELD";
export const DEPT_INFO_LICENSE = "DEPT_INFO_LICENSE";
export const DEPT_INFO_DEPT_FEATURES = "DEPT_INFO_DEPT_FEATURES";

export const INIT_VIEW = "INIT_VIEW";
export const AERIAL_VIEW = "AERIAL_VIEW";
export const DIRECTIONS_VIEW = "DIRECTIONS_VIEW";
export const SMOKINGAREA_VIEW = "SMOKINGAREA_VIEW";
export const GUIDE_VIEW = "GUIDE_VIEW";

export const INIT_STATUE = "INIT_STATUE";
export const ENTER_STATUE = "ENTER_STATUE";
export const LEAVE_STATUE = "LEAVE_STATUE";

export const INIT_BUS_STATION = "INIT_BUS_STATION";
export const ON_BUS_STATION_ONE = "ON_BUS_STATION_ONE";
export const ON_BUS_STATION_TWO = "ON_BUS_STATION_TWO";

export const INIT_SMOKING_AREA = "INIT_SMOKING_AREA";
export const ON_SMOKING_AREA = "ON_SMOKING_AREA";

export const INIT_CODING_AREA = "INIT_CODING_AREA";
export const ENTER_CODING_AREA = "ENTER_CODING_AREA";

export const DEPT_HEAD_ANI_INIT = "DEPT_HEAD_ANI_INIT";
export const DEPT_HEAD_ANI_MOVE = "DEPT_HEAD_ANI_MOVE";

export const INIT_GOLDBOXAREA = "INIT_GOLDBOXAREA";
export const ON_GOLDBOXAREAONE = "ON_GOLDBOXAREAONE";
export const ON_GOLDBOXAREATWO = "ON_GOLDBOXAREATWO";
export const ON_GOLDBOXAREATHREE = "ON_GOLDBOXAREATHREE";

export const initChar = () => ({
  type: INIT_CHARACTER,
});
export const mainChar = (newPosition) => ({
  type: MAIN_CHARACTER,
  payload: newPosition,
});
export const mainCharDept = (newPosition) => ({
  type: MAIN_CHARACTER_DEPT,
  payload: newPosition,
});

// 미니맵 - 성준
export const initMiniMapTeleport = () => ({
  type: INIT_MINI_MAP_TELEPORT,
});

export const miniMapTeleport = (teleportPosition) => ({
  type: MINI_MAP_TELEPORT,
  payload: teleportPosition,
});

// 맵 - 성준
export const yhMap = () => ({
  type: YH_MAP,
});
export const deptMap = () => ({
  type: DEPT_MAP,
});
export const computerSoftwareMap = (pathData) => ({
  type: COMPUTER_SOFTWARE_MAP,
  payload: pathData,
});

// 가이드 - 성준
export const initGuide = () => ({
  type: INIT_GUIDE,
});
export const welcomeGuide = () => ({
  type: GUIDE_WELCOME,
});
export const tvGuide = () => ({
  type: GUIDE_TV,
});
export const statueGuide = () => ({
  type: GUIDE_STATUE,
});

// 모달 - 성준
export const initModal = () => ({
  type: INIT_MODAL,
});

// 클라이언트 사이드 메뉴 - 성준
export const initSideMenu = () => ({
  type: INIT_SIDE_MENU,
});
export const deptRec = () => ({
  type: SIDE_MENU_DEPT_REC,
});

// 미니맵 상단 버튼 그룹 - 성준
// 미니맵 상단 버튼 뷰 초기화 - 성준
export const initView = () => ({
  type: INIT_VIEW,
});
// 미니맵 상단 항공뷰 버튼 - 성준
export const aerialView = () => ({
  type: AERIAL_VIEW,
});
// 미니맵 상단 찾아오는 길 버튼 - 자현
export const directionsView = () => ({
  type: DIRECTIONS_VIEW,
});
// 미니맵 상단 흡연구역 버튼 - 석재
export const smokingAreaView = () => ({
  type: SMOKINGAREA_VIEW,
});
// 미니맵 상단 캠퍼스안내 버튼 - 성준
export const campusGuideView = () => ({
  type: GUIDE_VIEW,
});

// 버스정류장 진입여부
export const initBusStation = () => ({
  type: INIT_BUS_STATION,
});
export const onBusStationOne = () => ({
  type: ON_BUS_STATION_ONE,
});
export const onBusStationTwo = () => ({
  type: ON_BUS_STATION_TWO,
});

// 키오스크
export const initKiosk = () => ({
  type: INIT_KIOSK,
});
export const kioskPyeonghwaOne = (boolValue) => ({
  type: KIOSK_PYEONGHWA_ONE,
  payload: boolValue,
});
export const kioskPyeonghwaTwo = (boolValue) => ({
  type: KIOSK_PYEONGHWA_TWO,
  payload: boolValue,
});
export const kioskBongSa = (boolValue) => ({
  type: KIOSK_BONGSA,
  payload: boolValue,
});
export const kioskJayu = (boolValue) => ({
  type: KIOSK_JAYU,
  payload: boolValue,
});
export const kioskCafeteria = (boolValue) => ({
  type: KIOSK_STUDENT_CAFETERIA,
  payload: boolValue,
});
export const kioskNanum = (boolValue) => ({
  type: KIOSK_NANUM,
  payload: boolValue,
});
export const kioskChangjo = (boolValue) => ({
  type: KIOSK_CHANGJO,
  payload: boolValue,
});
export const kioskMemorialHall = (boolValue) => ({
  type: KIOSK_MEMORIAL_HALL,
  payload: boolValue,
});
export const kioskYujaela = (boolValue) => ({
  type: KIOSK_YUJAELA,
  payload: boolValue,
});
//입구 동상
export const initStatue = () => ({
  type: INIT_STATUE,
});
export const Enter_Statue = () => ({
  type: ENTER_STATUE,
});
export const Leave_Statue = () => ({
  type: LEAVE_STATUE,
});

// 흡연장
export const initSmokingArea = () => ({
  type: INIT_SMOKING_AREA,
});
export const onSmokingArea = () => ({
  type: ON_SMOKING_AREA,
});
// 학과체험 맵 학과 소개 - 성준
// 교육목표
export const initDeptInfo = () => ({
  type: INIT_DEPT_INFO,
});
export const deptInfoEduGoals = () => ({
  type: DEPT_INFO_EDU_GOALS,
});
// 주요교육분야
export const deptInfoMainEduFields = () => ({
  type: DEPT_INFO_MAIN_EDU_FIELDS,
});
// 진로 및 취업분야
export const deptInfoCareerAndEmploymentField = () => ({
  type: DEPT_INFO_CAREER_EMPLOYMENT_FIELD,
});
// 자격증
export const deptInfoLicense = () => ({
  type: DEPT_INFO_LICENSE,
});
// 학과특징
export const deptInfoDeptFeatures = () => ({
  type: DEPT_INFO_DEPT_FEATURES,
});

//학과체험의 코딩영역
export const initCodingArea = () => ({
  type: INIT_CODING_AREA,
});
export const enterCodingArea = () => ({
  type: ENTER_CODING_AREA,
});
// export const LeaveCodingArea = () => ({
//     type: LEAVE_CODINGAREA
// })

// 학과장 소개 - 성준
export const deptHeadAniInit = () => ({
  type: DEPT_HEAD_ANI_INIT,
});

export const deptHeadAniMove = () => ({
  type: DEPT_HEAD_ANI_MOVE,
});
//보물상자 영역
export const init_GoldboxArea = () => ({
  type: INIT_GOLDBOXAREA,
});
export const OnGoldBoxAreaOne = () => ({
  type: ON_GOLDBOXAREAONE,
});
export const OnGoldBoxAreaTwo = () => ({
  type: ON_GOLDBOXAREATWO,
});
export const OnGoldBoxAreaThree = () => ({
  type: ON_GOLDBOXAREATHREE,
});
