import { tilesPerRow, tileSize } from "../constants";

type Props = {
  rowIndex: number;
  children?: React.ReactNode;
};
export function Grass({ rowIndex, children }: Props) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh receiveShadow>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]}></boxGeometry>
        <meshLambertMaterial color={0x63A361} flatShading></meshLambertMaterial>
      </mesh>
      {children}
    </group>
  );
}
