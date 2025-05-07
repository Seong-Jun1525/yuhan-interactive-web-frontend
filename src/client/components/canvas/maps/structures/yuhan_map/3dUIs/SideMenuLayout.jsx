import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import Swal from "sweetalert2";
import DeptRecommand from "../../../../../canvas_layout/deptrecommand/deptrecommand";
import DetailFooter from "./DetailFooter";
import DetailHeader from "./DetailHeader";
import { useDispatch } from "react-redux";

let title;

const SideMenuLayout = (props) => {
  const [cookies] = useCookies(["user"]);
  const userId = cookies.user;
  const userType = cookies.userType;

  const dispatch = useDispatch();

  const { pageName, value } = props;
  title = pageName;

  if (title === "consultation") title = "상담신청";
  else if (title === "board") title = "유한게시판";
  else if (title === "food") title = "오늘의 메뉴";
  else if (title === "deptRec") title = "학부추천";

  useEffect(() => {
    if (userId) {
      if (userType === "student") {
        CurrentStudentData();
        dispatch(myCounsel());
      }

      if (userType === "professor") {
        CurrentProfessorData();
        dispatch(reqForConsultation());
      }
    }
  }, []);

  return (
    <SideMenuLayoutWrapper>
      {value && (
        <>
          <DetailHeader title={title} />
          <DetailContent>{title === "학부추천" && <DeptRecommand />}</DetailContent>
          <DetailFooter />
        </>
      )}
    </SideMenuLayoutWrapper>
  );
};

const SideMenuLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--sub-color);
  padding: 1rem;
`;

export default SideMenuLayout;
