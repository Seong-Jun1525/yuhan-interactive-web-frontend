/** 파일생성자 : 이정민
 * 초기 position, scale 설정 : 이정민
 * position, scale 수정 및 그림자 설정 : 임성준
 */
import { useBox } from '@react-three/cannon'
import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion-3d'
import { MemorialHallBigEntrance } from './MemorialHallBigEntrance'
import { MemorialHallSmallEntrance } from './MemorialHallSmallEntrance'
import { MemorialHallEntranceBlock } from './MemorialHallEntranceBlock'
import { SmokingArea } from '../etc/SmokingArea'

export function MemorialHall({position, viewValue, viewName, ...props}) {
  const memorialRef = useRef()
  const [hovered, setHovered] = useState(false)

  const { scene, nodes, materials } = useGLTF('/assets/models/building/B7.glb')
  const [meshRef, api] = useBox(() => ({
    args: [117, 220, 190],
    type: 'Static',
    mass: 1,
    position,
    ...props
  }))

  const handlePointerOver = () => {
      if(viewValue && viewName === 'campusGuideView') {
          setHovered(true)
      }
  }
  const handlePointerOut = () => {
      setHovered(false)
  }

  useEffect(() => {
    scene.traverse((obj) => {
      if(obj.isObject3D) {
        
        obj.castShadow = true
        obj.receiveShadow = true
      }
    })
  }, [scene])

  return (
    <motion.group
      ref={memorialRef}
      onPointerOver={(e) => {
        e.stopPropagation()
        handlePointerOver()
      }}
      onPointerOut={handlePointerOut}
      animate={{
        y: hovered ? 20 : -1
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
    >
      <group
        ref={meshRef}
        onPointerUp={(e) => {
              e.stopPropagation()
      }}> 
        <group position={[-3,-10,1]} rotation={[0,0,0]} scale={[3.242, 3.242, 4.501]}>
          <mesh geometry={nodes.Text001.geometry} material={materials['DCE759 & Metal (DEVName, Statue).001']} />
          <mesh geometry={nodes.Text001_1.geometry} material={materials['C0E8F6 (B1~9(Window)).001']} />
          <mesh geometry={nodes.Text001_2.geometry} material={materials['18226AA (Number Plane).001']} />
          <mesh geometry={nodes.Text001_3.geometry} material={materials['E2E2E2(B1~9(Body,Number)).001']} />
          <mesh geometry={nodes.Text001_4.geometry} material={materials['23683C (RoofTop).001']} />
          <mesh geometry={nodes.Text001_5.geometry} material={materials['D2D2D2 & Metal (B4,B5,B6,B7).001']} />
          <mesh geometry={nodes.Text001_6.geometry} material={materials['FFFFFF (Number, BaskitBall).001']} />
          <mesh geometry={nodes.Text001_7.geometry} material={materials['A2A2A2(B9, Park(Rock),B5-6 Plane).001']} />
          <mesh geometry={nodes.Text001_8.geometry} material={materials['644F1C (Park Plane).001']} />
          <mesh geometry={nodes.Text001_9.geometry} material={materials['0CFF0F(Leaf,Smoking Booth).001']} />
          <mesh geometry={nodes.Text001_10.geometry} material={materials['0EA6EF (Leaf, Smoking Booth).001']} />
          <mesh geometry={nodes.Text001_11.geometry} material={materials['006400 (Leaf).001']} />
          <mesh geometry={nodes.Text001_12.geometry} material={materials['654321 (Wood).001']} />
        </group>
      </group>
      <MemorialHallBigEntrance position={[-263.439, 69, 192.681]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <MemorialHallSmallEntrance position={[-263.439, 69, 107.681]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <MemorialHallEntranceBlock position={[-274.439, 69, 192.681]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <SmokingArea position={[-310, 161.5, 125]} rotation={[Math.PI, 0, 0]} scale={[1.5, 13, 1.5]} />
    </motion.group>
  )
}

useGLTF.preload('/assets/models/building/B7.glb')
