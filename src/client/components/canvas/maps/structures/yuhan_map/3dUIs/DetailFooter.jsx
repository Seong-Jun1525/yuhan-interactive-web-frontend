import React from "react";
import styled from "styled-components";

const DetailFooter = () => {
  return (
    <>
      <DetailFooterLayout>
        <DetailFooterLogo>
          {/* 로고 */}
          <img src="/assets/images/yuhan-logo.png" />
        </DetailFooterLogo>
        <DetailFooterContent>
          <div>
            {/* 팀명 */}
            <p>&copy; 2024 유한대학교 19PLUS 졸업작품</p>
          </div>
          <div>
            {/* 팀원명 */}
            <a href="https://github.com/SeokjaeL" target="_blank">
              이석재
            </a>
            <a href="https://github.com/Seong-Jun1525" target="_blank">
              임성준
            </a>
            <a href="https://github.com/Jungmin828" target="_blank">
              이정민
            </a>
            <a href="https://github.com/ohjaoh" target="_blank">
              오자현
            </a>
          </div>
          <div>
            {/* 학교 */}
            <p>14780) 경기도 부천시 경인로 590 (괴안동 185-34)</p>
          </div>
        </DetailFooterContent>
      </DetailFooterLayout>
    </>
  );
};

const DetailFooterLayout = styled.div`
  width: 100%;
  height: 15%;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const DetailFooterLogo = styled.div`
  width: 10%;
  height: 100%;
`;

const DetailFooterContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--sub-color);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div > a {
    margin-right: 1rem;
    transition: 0.2s ease-in-out;
    &:hover {
      color: var(--font-yellow-color);
    }
  }
`;

export default DetailFooter;
