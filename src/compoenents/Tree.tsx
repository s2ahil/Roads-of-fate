import { tileSize } from "../constants";


type Props={
    tileIndex:number;
    height:number;
}

export function Tree({tileIndex,height}:Props){
    return(
        <group position-x={tileIndex*tileSize}>
            <mesh position-z={height / 2 + 20} castShadow receiveShadow>
            <boxGeometry args={[30,30,height]}></boxGeometry>
            <meshLambertMaterial color={0x7aa21d} flatShading></meshLambertMaterial>
            </mesh>

            <mesh position-z={10} castShadow receiveShadow>
                <boxGeometry args={[15,15,20]}></boxGeometry>
                <meshLambertMaterial color={0x4d2926} flatShading></meshLambertMaterial>
            </mesh>
        </group>
    )
}