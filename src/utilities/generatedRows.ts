import * as THREE from "three";
import { minTileIndex, maxTileIndex } from "../constants";
import { type Row, type RowType } from "../types";

export function generatedRows(amount: number): Row[] {
    const rows: Row[] = [];
    for (let i = 0; i < amount; i++) {
        const rowData = generatedRow();
        rows.push(rowData);

    }
    return rows;

}



function generatedRow(): Row {

    const type: RowType = randomElement(["car", "truck", "forest"]);
    if (type === "car") return generateCarLaneMetadata();
    if (type === "truck") return generateTruckLaneMetadata();
    return generateForestMetadata();

}

function randomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
}

function generateForestMetadata(): Row {
    const occupiedTiles = new Set<number>();
    const trees = Array.from({ length: 4 }, () => {
        let tileIndex;

        do {
            tileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);

        } while (occupiedTiles.has(tileIndex));
        occupiedTiles.add(tileIndex)
        const height = randomElement([20, 45, 60])

        return { tileIndex, height };


    })

    return { type: "forest", trees };

}



function randomBrightColor(): THREE.ColorRepresentation {
    const hue = Math.random();          // 0–1
    const saturation = 0.8 + Math.random() * 0.2; // 80–100%
    const lightness = 0.45 + Math.random() * 0.2; // 45–65%

    const color = new THREE.Color();
    color.setHSL(hue, saturation, lightness);
    return color;
}

function generateCarLaneMetadata(): Row {
    const direction = randomElement([true, false]);
    const speed = randomElement([125, 156, 188]);

    const occupiedTiles = new Set<number>();


    const vehicles = Array.from({ length: 3 }, () => {
        let initialTileIndex;
        do {
            initialTileIndex = THREE.MathUtils.randInt(
                minTileIndex,
                maxTileIndex
            );
        } while (occupiedTiles.has(initialTileIndex))
        occupiedTiles.add(initialTileIndex - 1)
        occupiedTiles.add(initialTileIndex)
        occupiedTiles.add(initialTileIndex + 1)

        const color :THREE.ColorRepresentation=randomElement([
            0xFFC50F,0xF96666,0x025955,
        ])
        // const color = randomBrightColor();

        return { initialTileIndex, color }
    })

    return { type: "car", direction, speed, vehicles }

}

function generateTruckLaneMetadata(): Row {
    const direction = randomElement([true, false]);
    const speed = randomElement([125, 156, 188]);

    const occupiedTiles = new Set<number>();


    const vehicles = Array.from({ length: 2 }, () => {
        let initialTileIndex;
        do {
            initialTileIndex = THREE.MathUtils.randInt(
                minTileIndex,
                maxTileIndex
            );

        } while (occupiedTiles.has(initialTileIndex))
        occupiedTiles.add(initialTileIndex - 2)
        occupiedTiles.add(initialTileIndex - 1)
        occupiedTiles.add(initialTileIndex)
        occupiedTiles.add(initialTileIndex + 1)
        occupiedTiles.add(initialTileIndex + 2)

        // const color :THREE.ColorRepresentation=randomElement([
        //     0xa52523,0xbdb638,0x78b14b,
        // ])
        const color = randomBrightColor();

        return { initialTileIndex, color }
    })

    return { type: "truck", direction, speed, vehicles }
}