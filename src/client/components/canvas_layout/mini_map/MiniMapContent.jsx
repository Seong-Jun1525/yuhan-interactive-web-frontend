/** 임성준
 * 미니맵 Content 컴포넌트
 */

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import MiniMapElements from './MiniMapElements'

const MiniMapContent = ({cameraPosition}) => {
    return (
        <Canvas
            id='canvas'
            gl={{antialias: true}}
            shadows
            camera={{
                fov: 50,
                near: 1.5,
                far: 5000,
                position: cameraPosition
            }}
            style={{width: '320px', height: '330px'}}
        >
            <ambientLight name="ambientLight" intensity={0.5} />
            <directionalLight
                args={[0xffffff, 1]}
                castShadow
                intensity={5}
                position={[0, 700, 0]}//{[-lightPos[0], -lightPos[1], -lightPos[2]]}
                shadow-camera-left={-25}
                shadow-camera-right={25}
                shadow-camera-top={25}
                shadow-camera-bottom={-25}
                shadow-camera-near={0.1}
                shadow-camera-far={200}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <OrbitControls
                enabled={false}
                makeDefault // 카메라의 설정이 계속 변경될 예정일 경우에 튕기거나 끊김없게 해주기 위해 설정
            />
            <Physics gravity={[0, -2.6, 0]}>
                <MiniMapElements />
            </Physics>
        </Canvas>
    )
}

export default MiniMapContent