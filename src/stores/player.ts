import type { MoveDirection } from "../types";
import { endsUpInValidPosition } from "../utilities/endsUpInValidPosition";
import useMapStore from "./map"
import useGameStore from "./game"
import * as THREE from "three"
import MoveSound from "../assets//audios/Move.mp3"
const stepSound = new Audio(MoveSound)
stepSound.volume = 0.4;
export const state: {
    currentRow: number;
    currentTile: number;
    movesQueue: MoveDirection[];
    ref: THREE.Object3D | null
} = {
    currentRow: 0,
    currentTile: 0,
    movesQueue: [],
    ref: null
}


export function queueMove(direction: MoveDirection) {

    const status = useGameStore.getState().status;
    if (status !== "running") return;


    const isValidMove = endsUpInValidPosition(
        { rowIndex: state.currentRow, tileIndex: state.currentTile },
        [...state.movesQueue, direction]
    )

    if (!isValidMove) return;

    state.movesQueue.push(direction)
}


export function stepCompleted() {

    stepSound.currentTime = 0;
    stepSound.play();
    const direction = state.movesQueue.shift()
    //extra
    const status = useGameStore.getState().status;
    if (status !== "running") return;

    if (direction === "forward") state.currentRow += 1;
    if (direction === "backward") state.currentRow -= 1;
    if (direction === "left") state.currentTile -= 1;
    if (direction === "right") state.currentTile += 1;
    // add new rows if it is running out of rows

    if (state.currentRow === useMapStore.getState().rows.length - 10) {
        useMapStore.getState().addRows();
    }


    useGameStore.getState().updatedScore(state.currentRow);

}

export function setRef(ref: THREE.Object3D) {
    state.ref = ref;
}

export function reset() {
    state.currentRow = 0;
    state.currentTile = 0;
    state.movesQueue = []
    if (!state.ref) return
    state.ref.position.x = 0
    state.ref.position.y = 0

    state.ref.children[0].rotation.z = 0
}