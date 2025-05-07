/**
 * 임성준
 * - 학과맵 구현
 * - 추후 학과 추가 가능
 */
import React from "react";
import CodingGroup from "./dept/coding/CodingGroup";
import EtcGroup from "./dept/etc/EtcGroup";
import DeptInfoGroup from "./dept/info/DeptInfoGroup";

const DeptElements = ({ groundMapName }) => {
  return (
    <>
      {groundMapName !== "" && (
        <>
          {groundMapName === "computer_sw_map" && (
            // 컴소
            <>
              <DeptInfoGroup groundMapName={groundMapName} />
              <EtcGroup groundMapName={groundMapName} position={[-125, 0, -125]} />
              {/* <GalleryGroup /> */}
              <CodingGroup />
            </>
          )}
        </>
      )}
    </>
  );
};

export default DeptElements;
