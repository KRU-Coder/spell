import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducer/rootReducer'

const isDevelopment = import.meta.env.VITE_NODE_ENV === 'development'

export const store = configureStore({
    reducer: rootReducer,
    devTools: isDevelopment,
})
