import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";
import { useRef } from "react";
import useVehicleAnimation from "../hooks/useVehicleAnimation";
import useHitDetection from "../hooks/useHitDetection";
type Props = {
  rowIndex: number;
  initialTileIndex: number;
  direction: boolean;
  speed: number;
  color: THREE.ColorRepresentation;
};

export function Truck({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: Props) {
  const truck = useRef<THREE.Group>(null);
  useVehicleAnimation(truck, direction, speed);
  useHitDetection(truck, rowIndex);
  return (
    <group
      position-x={initialTileIndex * tileSize}
      //  scale-x={direction ? 1 : -1}
      rotation-z={direction ? 0 : Math.PI}
      ref={truck}
    >
      <mesh position={[-15, 0, 25]} castShadow receiveShadow>
        <boxGeometry args={[70, 35, 35]}></boxGeometry>
        <meshLambertMaterial color={0xb4c6fc} flatShading></meshLambertMaterial>
      </mesh>
      <mesh position={[35, 0, 20]} castShadow receiveShadow>
        <boxGeometry args={[30, 30, 30]}></boxGeometry>
        <meshLambertMaterial color={color} flatShading></meshLambertMaterial>
      </mesh>

      <Wheel x={-35}></Wheel>
      <Wheel x={5}></Wheel>
      <Wheel x={37}></Wheel>
    </group>
  );
}
