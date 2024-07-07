import { useQuery } from '@tanstack/react-query'
import { fetchSpells } from '../services/spells'
import { useDispatch } from 'react-redux'
import { setItems } from '../redux/reducer/spell'

const useFetchItems = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isError } = useQuery({
        queryKey: ['spell_list'],
        queryFn: async () => await fetchSpells(),
    })

    if (data?.results) {
        dispatch(setItems(data?.results))
    }

    return { data, isLoading, isError }
}

export default useFetchItems
