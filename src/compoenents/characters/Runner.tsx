export function Runner() {
  return (
      <group>
          {/* HEAD */}
          <mesh position={[0, 0, 30]} castShadow receiveShadow>
            <boxGeometry args={[14, 12, 14]} />
            <meshLambertMaterial color={0xffd2a1} flatShading />
          </mesh>

          {/* HAIR (TOP CAP) */}
          <mesh position={[0, 2, 36]}>
            <boxGeometry args={[14, 17, 4]} />
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
  );
}
