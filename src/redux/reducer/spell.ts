import { createSlice } from '@reduxjs/toolkit'

const spellSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        currentPage: 1,
        itemsPerPage: 10,
        activeIndex: null,
    },
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
    },
})

export const { setItems, setCurrentPage, setSpellIndex } = spellSlice.actions

export default spellSlice.reducer
