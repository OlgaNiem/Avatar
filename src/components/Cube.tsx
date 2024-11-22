"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react';



export default function Cube(){
  const cubeRef = useRef(null)
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.03
      cubeRef.current.rotation.y += 0.02
    }
  })
  
  return (
    <mesh ref={cubeRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="silver" metalness={0.6} roughness={0.3}/>
    </mesh>
  )
}
