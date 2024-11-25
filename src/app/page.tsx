'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Avatar from '../components/Avatar';

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col sm:flex-row">
      <div className="absolute inset-x-0 top-0 h-[90%] sm:inset-0 sm:h-auto flex items-center justify-center">
        <Canvas
          shadows
          gl={{ alpha: true }}
          camera={{ position: [0, 5, 15], fov: 10 }}
        >
          <OrbitControls
            target={[0, 0, 0]}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />

          <ambientLight intensity={0.5} />
          <directionalLight
            position={[7, 7, 7]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          <Avatar position={[0, -1, 0]} scale={[1, 1, 1]} />
        </Canvas>
      </div>

      <div className="absolute bottom-4 left-4 right-4 w-auto sm:w-[20%] bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-lg z-10 sm:static sm:bottom-auto">
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Instructions:
        </h1>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-800">
          <li className="transition-transform transform hover:scale-105 hover:text-purple-600">
            Hover the cursor over the avatar to enlarge it.
          </li>
          <li className="transition-transform transform hover:scale-105 hover:text-pink-500">
            Click on the avatar to rotate it clockwise by 45 degrees.
          </li>
          <li className="transition-transform transform hover:scale-105 hover:text-purple-600">
            Hover the cursor over the avatar, hold it, and move it left and right to view the avatar from different sides.
          </li>
          <li className="transition-transform transform hover:scale-105 hover:text-pink-500">
            Refresh the page to restore everything to its original state.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
