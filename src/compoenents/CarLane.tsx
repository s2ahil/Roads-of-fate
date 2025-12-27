import type {Row} from "../types"
import {Road} from "./Road"
import {Car} from "./Car"

type Props={
    rowIndex:number;
    rowData:Extract<Row,{type:"car"}>;
};

export function CarLane({rowIndex,rowData}:Props){
    return(
        <Road rowIndex={rowIndex}>
            {rowData.vehicles.map((vehciles,index)=>(
                <Car
                key={index}
                rowIndex={rowIndex}
                initialTileIndex={vehciles.initialTileIndex}
                direction={rowData.direction}
                speed={rowData.speed}
                color={vehciles.color}
                ></Car>
            ))}
        </Road>
    )
}


