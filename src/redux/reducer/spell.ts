import { createSlice } from '@reduxjs/toolkit'
import { IRoot } from '../../types/rootState'

const init: IRoot = {
    spells: {
        items: [],
        currentPage: 1,
        itemsPerPage: 10,
        activeIndex: null,
        favs: [],
    },
}
const spellSlice = createSlice({
    name: 'items',
    initialState: init.spells,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setSpellIndex: (state, action) => {
            state.activeIndex = action.payload
        },
        addFav: (state, action) => {
            if (state.favs.includes(action.payload)) {
                state.favs = state.favs.filter(
                    (item) => item !== action.payload
                )
            } else {
                state.favs = [...state.favs, action.payload]
            }
        },
        removeFav: (state, action) => {
            state.favs = state.favs.filter((item) => item !== action.payload)
        },
    },
})

export const { setItems, setCurrentPage, setSpellIndex, addFav } =
    spellSlice.actions

export default spellSlice.reducer
