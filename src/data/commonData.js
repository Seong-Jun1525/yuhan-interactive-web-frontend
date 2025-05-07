// fontUrl - 성준
export const FONT_URL = 'assets/fonts/HakgyoansimWoojuR.json'

// 화면 크기 - 임성준
export const aspectRatio = window.innerWidth / window.innerHeight

// 전공목록 - 임성준
export const MAJORS = [
    '자유전공',
    '기계설계',
    '안전소방',
    '전기공학',
    '컴퓨터소프트웨어공학',
    'IT정보통신공학',
    '산업디자인',
    '시각디자인',
    '실내건축',
    '애니메이션영상',
    '패션디자인',
    '방송미디어',
    '보건의료행정',
    '보건복지',
    '유한생명바이오',
    '의료뷰티',
    '건강웰니스',
    '작업치료',
    '응급구조',
    '사회서비스',
    '호텔외식조리',
    '식품영양',
    '호텔관광',
    '항공서비스',
    '경영'
]

// 교수직책목록 - 임성준
export const PROFESSOR_POSITION = [
    '학과장',
    '명예교수',
    '일반교수',
    '특임교수',
    '조교'
]

// 컴소과 경로 - 임성준
export const CSW_PATH = [
    'https://cse.yuhan.ac.kr/ibuilder.do?menu_idx=1021',
    'https://cse.yuhan.ac.kr/bbs/data/list.do?menu_idx=1032',
    'https://cse.yuhan.ac.kr/bbs/data/list.do?menu_idx=1036'
]

// 산업디자인과 경로 - 임성준
export const ID_PATH = [
    'https://id06.yuhan.ac.kr/ibuilder.do?menu_idx=1290',
    'https://id06.yuhan.ac.kr/bbs/data/list.do?menu_idx=630',
    'https://id06.yuhan.ac.kr/bbs/data/list.do?menu_idx=634',
    'https://id06.yuhan.ac.kr/bbs/data/list.do?menu_idx=642'
]

// 식품영양학과 경로 - 임성준
export const FN_PATH = [
    'https://fn.yuhan.ac.kr/ibuilder.do?menu_idx=1353',
    'https://fn.yuhan.ac.kr/bbs/data/list.do?menu_idx=856',
    'https://fn.yuhan.ac.kr/bbs/data/list.do?menu_idx=863',
    'https://fn.yuhan.ac.kr/bbs/data/list.do?menu_idx=895'
]

// 유한생명바이오학과 경로 - 임성준
export const BIO_PATH = [
    'https://bio.yuhan.ac.kr/ibuilder.do?menu_idx=6849',
    'https://bio.yuhan.ac.kr/couresChart.do?menu_idx=6852',
    'https://bio.yuhan.ac.kr/bbs/data/list.do?menu_idx=5053',
    'https://bio.yuhan.ac.kr/bbs/data/list.do?menu_idx=5053'
]

// 관리자 입장 코드(테스트) - 임성준
export const adminPassword = 'csw'

// 상담신청 테스트 데이터 - 성준
export const counselTestData = [
    { id: 1, title: 'test1', date: '2024-09-16', name: '임성준', submitDate: '2024-09-10', status: '상담완료' },
    { id: 2, title: 'test2', date: '2024-09-17', name: '홍길동', submitDate: '2024-09-11', status: '승인대기중' },
    { id: 3, title: 'test3', date: '2024-09-18', name: '이순신', submitDate: '2024-09-12', status: '상담승인' },
    { id: 4, title: 'test4', date: '2024-09-19', name: '박지성', submitDate: '2024-09-13', status: '상담취소' },
    { id: 5, title: 'test5', date: '2024-09-20', name: '유관순', submitDate: '2024-09-14', status: '상담완료' },
    { id: 6, title: 'test6', date: '2024-09-21', name: '강감찬', submitDate: '2024-09-15', status: '승인거절' },
    { id: 7, title: 'test7', date: '2024-09-22', name: '김유신', submitDate: '2024-09-16', status: '승인대기중' },
    { id: 8, title: 'test8', date: '2024-09-23', name: '장보고', submitDate: '2024-09-17', status: '상담취소' },
    { id: 9, title: 'test9', date: '2024-09-24', name: '세종대왕', submitDate: '2024-09-18', status: '상담승인' },
    { id: 10, title: 'test10', date: '2024-09-25', name: '김홍도', submitDate: '2024-09-19', status: '승인거절' },
    { id: 11, title: 'test11', date: '2024-09-26', name: '신사임당', submitDate: '2024-09-20', status: '상담완료' },
    { id: 12, title: 'test12', date: '2024-09-27', name: '김정호', submitDate: '2024-09-21', status: '승인대기중' },
    { id: 13, title: 'test13', date: '2024-09-28', name: '황희', submitDate: '2024-09-22', status: '상담취소' },
    { id: 14, title: 'test14', date: '2024-09-29', name: '이황', submitDate: '2024-09-23', status: '상담승인' },
    { id: 15, title: 'test15', date: '2024-09-30', name: '율곡이이', submitDate: '2024-09-24', status: '승인거절' },
    { id: 16, title: 'test16', date: '2024-10-01', name: '정몽주', submitDate: '2024-09-25', status: '상담완료' },
    { id: 17, title: 'test17', date: '2024-10-02', name: '안중근', submitDate: '2024-09-26', status: '승인대기중' },
    { id: 18, title: 'test18', date: '2024-10-03', name: '김구', submitDate: '2024-09-27', status: '상담취소' },
    { id: 19, title: 'test19', date: '2024-10-04', name: '허준', submitDate: '2024-09-28', status: '상담승인' },
    { id: 20, title: 'test20', date: '2024-10-05', name: '이성계', submitDate: '2024-09-29', status: '승인거절' },
]

export const counselListTestData = [
    { id: 1, title: 'test1', date: '2024-09-16', name: '임성준', submitDate: '2024-09-10', status: '승인대기중' },
    { id: 2, title: 'test2', date: '2024-09-17', name: '홍길동', submitDate: '2024-09-11', status: '상담완료' },
    { id: 3, title: 'test3', date: '2024-09-18', name: '이순신', submitDate: '2024-09-12', status: '상담취소' },
    { id: 4, title: 'test4', date: '2024-09-19', name: '박지성', submitDate: '2024-09-13', status: '상담승인' },
    { id: 5, title: 'test5', date: '2024-09-20', name: '유관순', submitDate: '2024-09-14', status: '승인거절' },
    { id: 6, title: 'test6', date: '2024-09-21', name: '강감찬', submitDate: '2024-09-15', status: '상담완료' },
    { id: 7, title: 'test7', date: '2024-09-22', name: '김유신', submitDate: '2024-09-16', status: '승인대기중' },
    { id: 8, title: 'test8', date: '2024-09-23', name: '장보고', submitDate: '2024-09-17', status: '상담취소' },
    { id: 9, title: 'test9', date: '2024-09-24', name: '세종대왕', submitDate: '2024-09-18', status: '상담승인' },
    { id: 10, title: 'test10', date: '2024-09-25', name: '김홍도', submitDate: '2024-09-19', status: '승인거절' },
    { id: 11, title: 'test11', date: '2024-09-26', name: '신사임당', submitDate: '2024-09-20', status: '상담완료' },
    { id: 12, title: 'test12', date: '2024-09-27', name: '김정호', submitDate: '2024-09-21', status: '상담취소' },
    { id: 13, title: 'test13', date: '2024-09-28', name: '황희', submitDate: '2024-09-22', status: '승인대기중' },
    { id: 14, title: 'test14', date: '2024-09-29', name: '이황', submitDate: '2024-09-23', status: '상담승인' },
    { id: 15, title: 'test15', date: '2024-09-30', name: '율곡이이', submitDate: '2024-09-24', status: '승인거절' },
    { id: 16, title: 'test16', date: '2024-10-01', name: '정몽주', submitDate: '2024-09-25', status: '상담완료' },
    { id: 17, title: 'test17', date: '2024-10-02', name: '안중근', submitDate: '2024-09-26', status: '상담취소' },
    { id: 18, title: 'test18', date: '2024-10-03', name: '김구', submitDate: '2024-09-27', status: '승인대기중' },
    { id: 19, title: 'test19', date: '2024-10-04', name: '허준', submitDate: '2024-09-28', status: '상담승인' },
    { id: 20, title: 'test20', date: '2024-10-05', name: '이성계', submitDate: '2024-09-29', status: '승인거절' },
]
// 키오스크 관련 데이터 - 성준
// 평화관
export const PEACE_HALL = [
    "전기공학전공", 
    "식품영양학과", 
    "호텔조리전공", 
    "카페베이커리전공", 
    "인공지능전공", 
    "작업치료과", 
    "뷰티화장품전공", 
    "피부메이크업전공", 
    "행정지원센터(1호관)", 
    "총무처(시설안전팀)", 
    "사업통합관리본부", 
    "장애학생지원센터", 
    "보건실", 
    "당직실"
]

// 봉사관
export const VOLUNTEER_CENTER = [
    "소방설비안전전공", 
    "전자공학전공", 
    "응급구조과", 
    "창업준비터", 
    "행정지원센터(2호관)"
]

// 자유관
export const FREE_HALL = [
    "기계시스템전공", 
    "반려동물보건학과", 
    "반려동물산업전공", 
    "행정지원센터(3호관)"
]

// 학생회관
export const STUDENT_CAFETERIA = [
    "학생자치위원회", 
    "대의원회", 
    "과학생회", 
    "동아리방", 
    "학생식당", 
    "교직원식당", 
    "구내매점"
]

// 나눔관
export const SHARING_HALL = [
    "보건의료행정학과", 
    "호텔관광전공", 
    "일본비즈니스전공", 
    "경영정보전공", 
    "광고미디어전공", 
    "유한바이오제약전공", 
    "유한생명화공전공", 
    "스포츠재활전공", 
    "방송문예창작전공", 
    "항공서비스학과", 
    "취업진로상담실", 
    "학생상담센터", 
    "행정지원센터(5,6호관)"
]

// 창조관
export const CREATION_HALL = [
    "산업디자인전공", 
    "시각디자인전공", 
    "실내건축전공", 
    "패션디자인전공", 
    "애니메이션웹툰전공", 
    "방송영상전공", 
    "방송연예전공", 
    "소강당"
]

// 유일한 기념관
export const MEMORIAL_HALL = [
    "컴퓨터소프트웨어전공", 
    "세무회계전공", 
    "게임콘텐츠전공", 
    "사회복지전공", 
    "윌로우하우스", 
    "도서관", 
    "뉴스퀘어", 
    "행정지원센터(7호관)"
]

// 유재라관
export const JAE_RA_YOO = [
    "이사장실", 
    "총장실", 
    "전략기획처", 
    "대외협력·홍보처", 
    "교무처", 
    "입학·학생처", 
    "총무처", 
    "지역공유 취·창업지원처", 
    "산학협력단", 
    "대강당", 
    "교강사휴게실", 
    "자유전공학과"
]

// 로딩창 말풍선내용
export const LoadingMessages = [
    "📖 교재는 맨 위!\n잘 챙겼나? 👜",
    "📚 이 책은 가방에\n꼭 넣어야 해! 📦",
    "✏️ 필통도 빠트리면 안돼!\n잘 넣었나? 🎒",
    "📘 노트랑 책...\n차곡차곡 정리하자! 🗂️",
    "📑 과제는 꼭 챙겨야지!\n잊으면 큰일이야! 🔖",
    "📝 오늘 배울 내용들...\n미리 준비 완료! 💼"
];

export const departmentLinks = {
    공학부: "https://sky.yuhan.ac.kr/deptIPSI/view.do?per_menu_idx=6082&menu_idx=6083&tabCnt=4&code=CDMJC0220101",
    디자인문화학부: "https://sky.yuhan.ac.kr/deptIPSI/view.do?per_menu_idx=6165&menu_idx=6206&tabCnt=4&code=CDMJC0220105",
    건강보건학부: "https://sky.yuhan.ac.kr/deptIPSI/view.do?per_menu_idx=6170&menu_idx=6226&tabCnt=4&code=CDMJC0220104",
    건강생활학부: "https://sky.yuhan.ac.kr/deptIPSI/view.do?per_menu_idx=6184&menu_idx=6282&tabCnt=4&code=CDMJC0221106",
    비즈니스학부: "https://sky.yuhan.ac.kr/deptIPSI/view.do?per_menu_idx=6174&menu_idx=6242&tabCnt=4&code=CDMJC0220106",
    자유전공학과: "https://sky.yuhan.ac.kr/deptIPSI/view.do?per_menu_idx=6290&menu_idx=6291&tabCnt=4&code=CDMJC0220403",
};

// 학과체험 맵 학과소개 데이터 - 성준
export const deptInfoCareerAndEmploymentFieldData = [
    "컴퓨터와 관련된 모든 산업 분야의 응용 소프트웨어 개발자",
    "정보시스템 운영과 유지보수 및 전산 운영요원",
    "웹/모바일 콘텐츠 제작 및 프로그램 개발자",
    "공공기관과 사기업의 전산실, 금융계, 연구소, 정보통신 분야, 소프트웨어 개발 업체 등의 거의 전 분야에 취업이 가능",
]

export const deptInfoEduGoalsData = [
    "정보화 사회의 진전과 더불어 컴퓨터 분야에 대한 전문지식을 갖춘 인력의 양성이 끊임없이 요구되고 있다.",
    "더욱이 최근 기존 산업의 한계를 뛰어넘어 보다 높은 고부가 가치창출의 필요성이 한층 증대되면서, 창의적이고 문제해결 능력을 갖춘 응용 SW개발자 양성은 국가경쟁력을 좌우하는 결정적인 요소로 부각되고 있다.",
    "컴퓨터소프트웨어공학과는 이러한 시대적 요청에 부응하여 컴퓨터를 이용한 정보처리 기술 이론 및 실습을 바탕으로, 산업체의 정보시스템 개발과 운영에 필요한 SW 개발, 웹/모바일 콘텐츠제작, 그리고 정보시스템 운영 등의 실무를 수행할 수 있는 현장밀착형 IT 전문인력 양성을 목표로 한다."
]

export const deptInfoMainEduFieldsData = [
    "1학년 - 프로그래머가 되기 위한 프로그래밍 기초 및 이론 학습",
    "C언어, Python, HTML5, Javascript, 프로그래밍 논리, 전산학 개론, 데이터베이스 개론, 데이터 구조 등",
    "2학년 - IT 산업 분야별 전공 실무 학습",
    "Java 프로그래밍, 객체지향 언어, VC++ 실습, 웹 프로그래밍, Linux, DB응용, DB 설계 및 구축, JSP, 모바일 프로그래밍(1) 등",
    "3학년 - 전공 실무 프로젝트 및 포트폴리오 작성",
    "진로탐색, C# 프로그래밍, JavaFramework, 데이터베이스 프로그래밍, 모바일 프로그래밍(2), 소프트웨어공학, 정보보안, 기업솔루션 프로젝트, 비즈니스 모델 설계, 빅데이터 활용, 응용SW 실무, 캡스톤 디자인, 현장실습 등" 
]

export const deptInfoLicenseData = [
    "1. 정보처리산업기사 (2022.01.01 부터 변경)",
    "",
    "- 정보처리 실무 능력을 평가하는 국가기술자격증",
    "응시자격 : 관련 전공 2년제 학력 필요",
    "시험 과목",
    "-필기- (OMR 방식이 아닌 컴퓨터로 진행하는 CBT 방식으로 변경)",
    "1) 정보시스템 기반 기술",
    "2) 프로그래밍 언어 활용",
    "3) 데이터베이스 활용",
    "-실기-",
    "1) 응용 SW 기초 기술 활용",
    "2) UI테이스",
    "3) 화면 구현",
    "4) 프로그래밍 언어 활용",
    "5) SQL활용",
    "6) 애플리케이션 테스트 수행",
    "7 ) 애플리케이션 배포",
    "",
    "2.컴퓨터 활용능력(1, 2급)",
    "-컴퓨터,스프레드시트,데이터베이스활용 능력을 평가하는 국가기술자격시험",
    "시험과목 : 1,2급(필기/실기)",
    "",
    "3.리눅스 마스터(1, 2급)",
    "-리눅스로 운영되는 전세계 80%이상의 스마트폰, 70%이상의 클라우드 서버 등 미래성장동력 분야에서 다양한 응용기반기술에 토대가되는 자격종목(공인민간자격증)",
    "시험 : 1차시험 - 온라인시험",
	"2차시험 - 필기",
    "",
    "그 외 MOS Master / ORACLE : OCP, OCJP / MicroSoft : MCP, MCSA, MCSE / CISCO : CCNA, CCNP 등"
]

export const deptInfoDeptFeaturesData = [
    "컴퓨터소프트웨어공학과 컴퓨터소프트웨어전공은 “창의적이고 문제 해결 능력을 갖춘 IT 전문인력 양성”이라는 시대적 요청에 부응하여, 컴퓨터를 이용한 정보처리 기술 이론 및 실습을 바탕으로 응용 소프트웨어 개발자와 정보시스템 운영자를 양성하기 위한 학과입니다.",
    "산업체의 정보시스템 개발과 운영에 필요한 SW 개발, 웹/모바일 솔루션 개발 및 콘텐츠 제작, 정보시스템 운영 등의 실무를 수행할 수 있는 현장 밀착형 IT 전문인력 양성을 목표로 교육하고 있습니다."
]

// 코딩체험에 들어갈 코드
export const CodingExperienceCode = [
    "#include <stdio.h>\n  int main() { \n    int num = '정수형데이터';\n    for (int i = 1; i <= 9; i++) { \n      printf(\"%d * %d = %d\\n\", num, i, num * i);\n    }\n  return 0; \n}",
    "public class Main {\n  public static void main(String[] args) {\n    int num = '정수형데이터';\n    for (int i = 1; i <= 9; i++) {\n      System.out.println(num + \" * \" + i + \" = \" + (num * i));\n    }\n  }\n}",
    "num = '정수형데이터'\nfor i in range(1, 10):\n    print(f'{num} * {i} = {num * i}')"
];
