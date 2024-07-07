import { combineReducers } from '@reduxjs/toolkit'
import spellReducer from './spell'

const rootReducer = combineReducers({
    spells: spellReducer,
})

export default rootReducer
