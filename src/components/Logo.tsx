"use client"
import { Canvas, } from '@react-three/fiber'
import React from 'react';
import Cube from './Cube';



export default function Logo(){
  
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} />
        <Cube />
      </Canvas>
    </div>
  )
}
