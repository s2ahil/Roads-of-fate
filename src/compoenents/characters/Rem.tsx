export function Rem() {
  return (
   <group>

      {/* HEAD */}
      <mesh position={[0, 0, 30]} castShadow receiveShadow>
        <boxGeometry args={[14, 12, 14]} />
        <meshLambertMaterial color={0xffd2a1} flatShading />
      </mesh>

      {/* HAIR TOP */}
      <mesh position={[0, 0, 36]}>
        <boxGeometry args={[16, 14, 4]} />
        <meshLambertMaterial color={0x89c8ff} flatShading />
      </mesh>

      {/* SIDE HAIR (bang style) */}
      <mesh position={[0, -5, 30]}>
        <boxGeometry args={[6, 10, 12]} />
        <meshLambertMaterial color={0x89c8ff} flatShading />
      </mesh>

      {/* BODY */}
      <mesh position={[0, 0, 18]} castShadow receiveShadow>
        <boxGeometry args={[16, 12, 18]} />
        <meshLambertMaterial color={0xffbad6} flatShading /> {/* pastel pink */}
      </mesh>

      {/* WAIST BAND */}
      <mesh position={[0, 0, 12]}>
        <boxGeometry args={[16, 12, 4]} />
        <meshLambertMaterial color={0xd46aa0} flatShading />
      </mesh>

      {/* LEFT ARM */}
      <mesh position={[-10, 0, 18]}>
        <boxGeometry args={[5, 7, 16]} />
        <meshLambertMaterial color={0xffd2a1} flatShading />
      </mesh>

      {/* RIGHT ARM */}
      <mesh position={[10, 0, 18]}>
        <boxGeometry args={[5, 7, 16]} />
        <meshLambertMaterial color={0xffd2a1} flatShading />
      </mesh>

 

      {/* LEGS */}
      <mesh position={[-4, 0, 4]}>
        <boxGeometry args={[6, 8, 8]} />
        <meshLambertMaterial color={0xffd2a1} flatShading />
      </mesh>

      <mesh position={[4, 0, 4]}>
        <boxGeometry args={[6, 8, 8]} />
        <meshLambertMaterial color={0xffd2a1} flatShading />
      </mesh>

    </group>
  );
}
