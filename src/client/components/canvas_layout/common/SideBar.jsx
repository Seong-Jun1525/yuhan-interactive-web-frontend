import { Close, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import MainSideBarMenu from "./MainSideBarMenu";
import DeptSideBarMenu from "./DeptSideBarMenu";
import { useLocation } from "react-router-dom";

const title = "";

const SideBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  // console.log('currentPath', currentPath) // 현재 경로 출력
  const currentMap = useSelector((state) => state.groundMap);
  const currentMapName = currentMap.mapName;
  // console.log('currentMapName', currentMapName)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <SideBarContainer className={isDropdownOpen ? "opened" : "closed"}>
        <SideBarHeader>
          <img src="/assets/images/yuhan-logo2.png" />
        </SideBarHeader>
        <SideBarList>{currentMapName === "yh_map" && currentPath === "/" ? <MainSideBarMenu /> : <DeptSideBarMenu />}</SideBarList>
      </SideBarContainer>
      <DropdownController
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen((prev) => !prev);
        }}
      >
        {isDropdownOpen ? <Close /> : <Menu />}
      </DropdownController>
    </>
  );
};

const SideBarContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: var(--main-opacity-color);
  width: 220px;
  height: 100%;
  transition: 0.3s ease-in-out;
  border-radius: 0 1rem 0 0;

  &.opened {
    transform: translateX(0);
  }

  &.closed {
    transform: translateX(-100%);
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1rem;
`;

const AccountManagementWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
`;

const AccountManagementList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccountManagementItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
  }

  a:hover {
    border-bottom: 0.01rem solid white;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
  }
`;

const WelcomeWrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const WelcomeContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarList = styled.div`
  width: 100%;
  height: 100%;
`;

const DropdownController = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--main-color);
  color: var(--sub-color);
  border-radius: 2.5rem;
  padding: 0.1rem;

  &:hover {
    color: var(--font-yellow-color);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export default SideBar;
