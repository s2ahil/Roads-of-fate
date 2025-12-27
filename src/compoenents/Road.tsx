import { tilesPerRow, tileSize } from "../constants";

type Props = {
  rowIndex: number;
  children?: React.ReactNode;
};

export function Road({ rowIndex, children }: Props) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh receiveShadow>
        <planeGeometry
          args={[tilesPerRow * tileSize, tileSize]}
        ></planeGeometry>
        <meshLambertMaterial color={0x5b532c} flatShading></meshLambertMaterial>
      </mesh>
      {children}
    </group>
  );
}
