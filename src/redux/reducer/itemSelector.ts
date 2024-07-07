import { createSelector } from '@reduxjs/toolkit'
import { IRoot } from '../../types/rootState'

export const selectAllItems = (state: IRoot) => state.spells.items
export const selectCurrentPage = (state: IRoot) => state.spells.currentPage
export const selectItemsPerPage = (state: IRoot) => state.spells.itemsPerPage

export const selectPaginatedItems = createSelector(
    [selectAllItems, selectCurrentPage, selectItemsPerPage],
    (items, currentPage, itemsPerPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return items.slice(startIndex, endIndex)
    }
)
