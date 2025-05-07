/**
 * 파일생성자 오자현
 * 문제 보물상자영역에 들어간 상태로 다른 곳으로 텔포해서 보물상자 보면 보물상자가 열려있음
 */
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion-3d';

export function GoldBox({ position, rotation }) {
  const isZoneActive = useSelector((state) => state.goldBox.isZone);
  const { nodes, materials } = useGLTF('/assets/models/etc/goldBox.glb');

  return (
    <group position={position} rotation={rotation} scale={3}>
      <group scale={[3, 1.5, 2]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.wood} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.Gold} />
      </group>
      {isZoneActive ? (
        <motion.group
          animate={{
            y: 3.5
          }}
          transition={{ duration: 2.5 }}
        >
          <group position={[0, 1.5, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.5, 3, 2]}>
            <mesh geometry={nodes.Cylinder.geometry} material={materials.wood} />
            <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Gold} />
          </group>
        </motion.group>
      ) : (
        <group position={[0, 1.5, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.5, 3, 2]}>
          <mesh geometry={nodes.Cylinder.geometry} material={materials.wood} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Gold} />
        </group>
      )} {/* 애니메이션이 끝나면 그룹을 숨김 */}
    </group>
  );
}

useGLTF.preload('/assets/models/etc/goldBox.glb');
