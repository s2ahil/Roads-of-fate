export function Wheel({x}:{x:number}){
    return(
        <mesh position={[x,0,6]}>
            <boxGeometry args={[12,33,12]}></boxGeometry>
            <meshLambertMaterial color={0x333333}></meshLambertMaterial>
        </mesh>
    )
}