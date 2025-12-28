import { create } from "zustand"
import useMapStore from "./map"

import { reset as resetPlayerStore } from "./player"

interface StoreState {
    status: "running" | "over";
    selectedCharacter: "runner" | "rem";
    setCharacter: (name: StoreState["selectedCharacter"]) => void;
    score: number;
    updatedScore: (rowIndex: number) => void;
    endGame: () => void;
    reset: () => void;
}


const useGameStore = create<StoreState>((set) => ({
    status: "running",
    selectedCharacter: "rem",

    setCharacter: (name) => set({ selectedCharacter: name }),


    score: 0,
    updatedScore: (rowIndex: number) => {
        set((state) => ({
            score: Math.max(rowIndex, state.score)
        }))
    }
    , endGame: () => {
        set({ status: "over" });
    },
    reset: () => {
        useMapStore.getState().reset()
        resetPlayerStore()
        set({ status: "running", score: 0 })

    }
}))

export default useGameStore