'use client';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GroupProps, useFrame, Vector3 } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

interface AvatarProps extends GroupProps {
  position?: Vector3;
  scale?: Vector3 | any;
}

const Avatar: React.FC<AvatarProps> = ({ position = [0, 0, 0], scale = [30, 30, 30], ...props }) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/3D-avatar/walk.glb') as any;
  const { actions } = useAnimations(animations, group);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
      if (actions) {
      const firstAction = Object.values(actions)[0]; 
      firstAction?.play();
    }
  }, [actions]);

  const handleClick = () => {
    setRotationAngle((prevAngle: number) => prevAngle + Math.PI / 4); 
  };
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (rotationAngle - group.current.rotation.y) * 0.1; 
    }
  });
  const adjustedScale =
    hovered && scale instanceof THREE.Vector3
      ? [scale.x * 1.2, scale.y * 1.2, scale.z * 1.2]
      : hovered && Array.isArray(scale)
      ? scale.map((s) => s * 1.2)
      : scale instanceof THREE.Vector3
      ? [scale.x, scale.y, scale.z]
      : scale
      
  return (
    <group
      ref={group}
      position={position}
      scale={adjustedScale} 
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
      dispose={null}
    >
      <primitive object={scene} />
    </group>
  );
};
export default Avatar;
