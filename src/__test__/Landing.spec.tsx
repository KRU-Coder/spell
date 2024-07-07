import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LandingPage from '../pages/landing'
import { IRoot } from '../types/rootState'

const queryClient = new QueryClient()
const mockStore = configureStore([])

const initialStateWithItems = {
    spells: {
        items: [
            { index: 1, name: 'Acid Arrow' },
            { index: 2, name: 'Acid Splash' },
        ],
        currentPage: 1,
        itemsPerPage: 10,
        activeIndex: null,
    },
}

const initialStateWithoutItems = {
    spells: {
        items: [],
        currentPage: 1,
        itemsPerPage: 10,
        activeIndex: 'Acid Arrow',
    },
}

describe('LandingPage component', () => {
    it('renders spell list when store has items', () => {
        const store = mockStore(initialStateWithItems)
        render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <LandingPage />
                </QueryClientProvider>
            </Provider>
        )

        const state: IRoot | any = store.getState()
        expect(state.spells.items).toHaveLength(2)
        expect(state.spells.items[0].name).toBe('Acid Arrow')
        expect(state.spells.items[1].name).toBe('Acid Splash')
    })

    it('does not render spell list when store has no items', () => {
        const store = mockStore(initialStateWithoutItems)
        render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <LandingPage />
                </QueryClientProvider>
            </Provider>
        )

        const state: IRoot | any = store.getState()
        expect(state.spells.items).toHaveLength(0)
        expect(state.spells.activeIndex).toBe('Acid Arrow')
    })
})
