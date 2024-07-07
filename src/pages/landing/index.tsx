import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import SpellList from '../../components/spell/SpellList'
import SpellDetails from '../../components/spell/SpellDetails'
import { selectPaginatedItems } from '../../redux/reducer/itemSelector'
import { setCurrentPage, setSpellIndex } from '../../redux/reducer/spell'
import useFetchItems from '../../hooks/useFetchItems'
import useFetchDetails from '../../hooks/useFetchDetails'
import { IRoot } from '../../types/rootState'
import LoadingState from '../../components/common/LoadingState'
import ErrorState from '../../components/common/ErrorState'
import { ISpell } from '../../types/spell'

const LandingPage = () => {
    const { isError, isLoading } = useFetchItems()
    const { spellDetails } = useFetchDetails()
    const {
        data: spellDetailsResp,
        isLoading: spellDetailsLoading,
        isError: spellDetailsError,
    } = spellDetails()
    const items = useSelector(selectPaginatedItems)
    const { activeIndex } = useSelector((state: IRoot) => state.spells)
    const dispatch = useDispatch()
    const itemLength = useSelector((state: IRoot) => state.spells.items.length)

    const [activePage, setActivePage] = useState<number>(1)

    useEffect(() => {
        dispatch(setCurrentPage(activePage))
    }, [dispatch, activePage])

    useEffect(() => {
        if (items?.length) {
            dispatch(setSpellIndex(items[0].index))
        }
    }, [dispatch, items])

    if (isLoading) {
        return <LoadingState label="Fetching Data..." />
    }

    if (isError) {
        return <ErrorState message="Error Fetching Data" />
    }

    return (
        <div className="lg:h-full">
            <div className="lg:grid lg:grid-cols-2 lg:gap-5 mt-5 transition-all">
                <div className="space-y-2 p-3 rounded-md">
                    {items?.map((item: ISpell) => {
                        return (
                            <div key={item.index}>
                                <SpellList
                                    index={item.index}
                                    title={item.name}
                                    key={item.index}
                                    is_active={item.index === activeIndex}
                                />

                                <div className="lg:hidden">
                                    {item.index === activeIndex && (
                                        <SpellDetails {...spellDetailsResp} />
                                    )}
                                </div>
                            </div>
                        )
                    })}
                    <ReactPaginate
                        activeClassName="bg-primary-700 text-white block w-8 h-8 flex items-center  justify-center rounded-full"
                        activeLinkClassName="block w-8 h-8 flex items-center justify-center rounded-full"
                        breakLabel="..."
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(itemLength / 10)}
                        renderOnZeroPageCount={null}
                        className="flex items-center flex-wrap gap-5 text-secondary-500"
                        onPageChange={({ selected }) =>
                            setActivePage(selected + 1)
                        }
                    />
                </div>
                <div className="border lg:h-[80vh] rounded-md overflow-y-auto">
                    {spellDetailsLoading ? (
                        <LoadingState label="Please Wait..." />
                    ) : spellDetailsError ? (
                        <ErrorState message="Error Loading Details" />
                    ) : (
                        <div className="hidden lg:block">
                            <SpellDetails {...spellDetailsResp} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LandingPage
