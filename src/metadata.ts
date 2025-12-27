import type { Row } from "./types";

export const rows: Row[] = [
    {
        type: "forest",
        trees: [
            { tileIndex: -3, height: 50 },
            { tileIndex: 2, height: 30 },
            { tileIndex: 5, height: 50 }
        ]
    },
    {
        type: "car",
        direction: false,// left
        speed:190,
        vehicles:[{initialTileIndex:2, color : 0xff0000},]

    },
     {
        type: "truck",
        direction: true,// left
        speed:190,
        vehicles:[{initialTileIndex:2, color : 0xff0000},]

    }
]