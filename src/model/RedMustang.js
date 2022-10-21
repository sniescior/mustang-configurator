import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RedMustang(props) {
  const { nodes, materials } = useGLTF('/red-mustang.gltf')
  return (
    <group {...props} dispose={null}>
      <pointLight intensity={0.7} decay={2} position={[1.72, 1.57, 0.82]} rotation={[-0.54, 0.74, 0.38]} />
      <pointLight intensity={0.7} decay={2} position={[-1.7, 1.57, 0.82]} rotation={[-0.45, -0.79, 2.2]} />
      <pointLight intensity={0.7} decay={2} position={[-1.7, 1.23, -3.64]} rotation={[-3.01, -0.44, 2.17]} />
      <pointLight intensity={0.7} decay={2} position={[-1.7, 1.23, 3.25]} rotation={[-0.42, -0.62, 2.08]} />
      <group position={[0.28, 0, -0.16]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} scale={[1, 1.23, 1]}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Circle_2.geometry} material={materials['Glass-material']} />
        <mesh geometry={nodes.Circle_3.geometry} material={materials['Rims-material']} />
        <mesh geometry={nodes.Circle_4.geometry} material={materials['Headlights-emission-material']} />
        <mesh geometry={nodes.Circle_5.geometry} material={materials['Tire-material']} />
        <group position={[-1.18, 0.47, -0.26]} scale={[0.23, 0.19, 0.23]}>
          <mesh geometry={nodes.Circle004_1.geometry} material={materials['Rims-material']} />
          <mesh geometry={nodes.Circle004_2.geometry} material={materials['Tire-material']} />
        </group>
        <group position={[0.85, 0.47, -0.26]} scale={[0.23, 0.19, 0.23]}>
          <mesh geometry={nodes.Circle001_1.geometry} material={materials['Rims-material']} />
          <mesh geometry={nodes.Circle001_2.geometry} material={materials['Tire-material']} />
        </group>
        <mesh geometry={nodes.Circle002_1.geometry} material={materials['Red-light-material']} />
        <mesh geometry={nodes.Circle002_2.geometry} material={materials['Red-light-emission-material']} />
        <mesh geometry={nodes.Circle004.geometry} material={materials['Rims-material']} />
      </group>
    </group>
  )
}

useGLTF.preload('/red-mustang.gltf')

export default RedMustang;