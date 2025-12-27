import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";
import useVehicleAnimation from "../hooks/useVehicleAnimation";
import { useRef } from "react";
import useHitDetection from "../hooks/useHitDetection";
type Props = {
  rowIndex: number;
  initialTileIndex: number;
  direction: boolean;
  speed: number;
  color: THREE.ColorRepresentation;
};

export function Car({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: Props) {
  const car = useRef<THREE.Group>(null);
  useVehicleAnimation(car, direction, speed);
  useHitDetection(car, rowIndex);
  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
      ref={car}
    >
      <mesh position={[0, 0, 12]} castShadow receiveShadow>
        <boxGeometry args={[60, 30, 15]}></boxGeometry>
        <meshLambertMaterial color={color} flatShading></meshLambertMaterial>
      </mesh>
      <mesh position={[-6, 0, 25.5]} castShadow receiveShadow>
        <boxGeometry args={[33, 24, 12]}></boxGeometry>
        <meshLambertMaterial color={0xffffff} flatShading></meshLambertMaterial>
      </mesh>
      <Wheel x={-18}></Wheel>
      <Wheel x={18}></Wheel>
    </group>
  );
}
