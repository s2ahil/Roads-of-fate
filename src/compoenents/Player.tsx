import { Bounds } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import usePlayerAnimation from "../hooks/usePlayerAnimation";
import { useThree } from "@react-three/fiber";
import { DirectionalLight } from "./DirectionalLight";
import { setRef } from "../stores/player";

export function Player() {
  const player = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const camera = useThree((state) => state.camera);
  usePlayerAnimation(player);

  useEffect(() => {
    if (!player.current) return;
    if (!lightRef.current) return;

    player.current.add(camera);
    lightRef.current.target = player.current;

    setRef(player.current);
  });

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={player}>
        {/* added this for camera rotation rest */}
        {/* <group>
          <mesh position={[0, 0, 10]} castShadow receiveShadow>
            <boxGeometry args={[15, 15, 20]}></boxGeometry>
            <meshLambertMaterial
              color={0xffffff}
              flatShading
            ></meshLambertMaterial>
          </mesh>

          <mesh position={[0, 0, 21]} castShadow receiveShadow>
            <boxGeometry args={[2, 4, 2]}></boxGeometry>
            <meshLambertMaterial
              color={0xf0619a}
              flatShading
            ></meshLambertMaterial>
          </mesh>
        </group> */}
        <group>
          {/* HEAD */}
          <mesh position={[0, 0, 30]} castShadow receiveShadow>
            <boxGeometry args={[14, 12, 14]} />
            <meshLambertMaterial color={0xffd2a1} flatShading />
          </mesh>

          {/* HAIR (TOP CAP) */}
          <mesh position={[0, 0, 36]}>
            <boxGeometry args={[14, 12, 4]} />
            <meshLambertMaterial color={0x3b2f2f} flatShading />
          </mesh>

          {/* BODY / TORSO */}
          <mesh position={[0, 0, 18]} castShadow receiveShadow>
            <boxGeometry args={[16, 12, 18]} />
            <meshLambertMaterial color={0xffeb3b} flatShading /> {/* yellow */}
          </mesh>

          {/* SHIRT GREEN STRIPE */}
          <mesh position={[0, 0, 12]}>
            <boxGeometry args={[16, 12, 4]} />
            <meshLambertMaterial color={0x6ddf4b} flatShading />
          </mesh>

          {/* LEFT ARM */}
          <mesh position={[-12, 0, 18]}>
            <boxGeometry args={[6, 8, 16]} />
            <meshLambertMaterial color={0xffd2a1} flatShading />
          </mesh>

          {/* LEFT ARM STRIPE */}
          <mesh position={[-12, 0, 12]}>
            <boxGeometry args={[6, 8, 4]} />
            <meshLambertMaterial color={0x6ddf4b} flatShading />
          </mesh>

          {/* RIGHT ARM */}
          <mesh position={[12, 0, 18]}>
            <boxGeometry args={[6, 8, 16]} />
            <meshLambertMaterial color={0xffd2a1} flatShading />
          </mesh>

          {/* RIGHT ARM STRIPE */}
          <mesh position={[12, 0, 12]}>
            <boxGeometry args={[6, 8, 4]} />
            <meshLambertMaterial color={0x6ddf4b} flatShading />
          </mesh>

          {/* SHORTS */}
          {/* x y z */}
          <mesh position={[-6, 0, 5]}>
            {/* width/depth/height */}
            <boxGeometry args={[6, 11, 10]} />
            <meshLambertMaterial color={0x4fa8ff} flatShading />{" "}
          </mesh>

            <mesh position={[6, 0, 5]}>
          
            <boxGeometry args={[6, 11, 10]} />
            <meshLambertMaterial color={0x4fa8ff} flatShading />{" "}
          </mesh>
       
        </group>

        <DirectionalLight ref={lightRef}></DirectionalLight>
      </group>
    </Bounds>
  );
}
