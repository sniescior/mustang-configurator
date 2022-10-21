/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mustang(props) {
  const { nodes, materials } = useGLTF('/mustang.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.01, 0, -0.16]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1.23, 1]}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Circle_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Circle_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Circle_4.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Circle_5.geometry} material={materials['Material.007']} />
        <group position={[-1.18, 0.47, -0.26]} scale={[0.23, 0.19, 0.23]}>
          <mesh geometry={nodes.Circle001_1.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Circle001_2.geometry} material={materials['Material.007']} />
        </group>
        <group position={[0.85, 0.47, -0.26]} scale={[0.23, 0.19, 0.23]}>
          <mesh geometry={nodes.Circle001_1.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Circle001_2.geometry} material={materials['Material.007']} />
        </group>
        <mesh geometry={nodes.Circle002_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Circle002_2.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Circle004.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

export default Mustang

useGLTF.preload('/mustang.gltf')