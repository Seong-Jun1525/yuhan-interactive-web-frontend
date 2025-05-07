import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faSchool } from "@fortawesome/free-solid-svg-icons";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessIcon from "@mui/icons-material/Business";
import CampaignIcon from "@mui/icons-material/Campaign";
import FestivalIcon from "@mui/icons-material/Festival";
import InfoIcon from "@mui/icons-material/Info";
import MuseumIcon from "@mui/icons-material/Museum";
import SchoolIcon from "@mui/icons-material/School";
import SupportIcon from "@mui/icons-material/Support";
import { useDispatch } from "react-redux";
import { deptRec } from "../../../../redux/actions/actions";
import Swal from "sweetalert2";
import styled from "styled-components";

const MainSideBarMenu = () => {
  const dispatch = useDispatch();

  const handleDeptRec = () => {
    dispatch(deptRec());
  };

  return (
    <MainSideBarMenuWrapper>
      <MainSideBarMenuItem>
        <FontAwesomeIcon icon={faSchool} />
        <span>
          <a
            onClick={() => {
              Swal.fire({
                title: "정문이동",
                icon: "warning",
                text: "모든 상태가 초기화되고 정문으로 이동합니다.",
                showCancelButton: true,
                confirmButtonText: "이동",
                cancelButtonText: "닫기",
              }).then((res) => {
                if (res.isConfirmed) {
                  history.go(0); // 새로고침
                }
              });
            }}
          >
            유한대학교
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <AccountBalanceIcon />
        <span>
          <a href="https://www.yuhan.ac.kr/ibuilder.do?menu_idx=3007" target="_blank">
            대학소개
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <InfoIcon />
        <span>
          <a href="https://sky.yuhan.ac.kr/intro.html" target="_blank">
            입학안내
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <CampaignIcon />
        <span>
          <a href="https://www.yuhan.ac.kr/bbs/data/list.do?menu_idx=3071" target="_blank">
            대학홍보
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <SchoolIcon />
        <span>
          <a href="https://www.yuhan.ac.kr/ibuilder.do?menu_idx=3091" target="_blank">
            학과안내
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <SupportIcon />
        <span>
          <a href="https://www.yuhan.ac.kr/ibuilder.do?per_menu_idx=3101&menu_idx=3415" target="_blank">
            학생서비스
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <FontAwesomeIcon icon={faLightbulb} />
        <span>
          <a onClick={handleDeptRec}>학부추천</a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <FestivalIcon />
        <span>
          <a href="https://www.yuhan.ac.kr/bbs/data/list.do?menu_idx=3160" target="_blank">
            유한광장
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <BusinessIcon />
        <span>
          <a href="https://sanhak.yuhan.ac.kr/index.do" target="_blank">
            산학협력단
          </a>
        </span>
      </MainSideBarMenuItem>
      <MainSideBarMenuItem>
        <MuseumIcon />
        <span>
          <a href="https://newih.yuhan.ac.kr/index.do" target="_blank">
            유일한기념관
          </a>
        </span>
      </MainSideBarMenuItem>
    </MainSideBarMenuWrapper>
  );
};

const MainSideBarMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  border-top: 0.3rem solid var(--sub-color);
`;

const MainSideBarMenuItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.7rem;
  gap: 1rem;
  border-bottom: 0.1rem solid var(--sub-color);
  cursor: pointer;
  color: var(--sub-color);

  svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-size: 0.8rem;
    padding-top: 0.5rem;
    font-weight: 500;
  }

  & > * {
    transition: 0.2s ease-in-out;
  }

  &:hover {
    background-color: var(--sub-color);
    color: var(--main-color);

    span {
      font-size: 1rem;
      font-weight: 800;
    }

    span > a {
      color: var(--main-color);
    }

    svg {
      width: 2.3rem;
      height: 2.3rem;
    }
  }
`;

export default MainSideBarMenu;
