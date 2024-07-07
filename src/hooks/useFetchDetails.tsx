import { useQuery } from '@tanstack/react-query'
import { fetchSpellsDetails } from '../services/spells'
import { useSelector } from 'react-redux'
import { IRoot } from '../types/rootState'

const useFetchDetails = () => {
    const index = useSelector((state: IRoot) => state.spells.activeIndex)
    const spellDetails = () => {
        const { data, isLoading, isError } = useQuery({
            queryKey: ['spell_details', index],
            queryFn: async () => await fetchSpellsDetails(index),
            enabled: !!index,
        })
        return { data, isLoading, isError }
    }
    return { spellDetails }
}

export default useFetchDetails
