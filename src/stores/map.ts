import { create } from "zustand"
import { generatedRows } from "../utilities/generatedRows"
import type { Row } from "../types"


interface StoreState {
    rows: Row[]
    addRows: () => void
    reset: () => void


}

const useStore = create<StoreState>((set) => ({
    rows: generatedRows(20),
    addRows: () => {
        const newRows = generatedRows(20)
        set((state) => ({ rows: [...state.rows, ...newRows] }))
    },
    reset: () => set({ rows: generatedRows(20) })
}))

export default useStore;