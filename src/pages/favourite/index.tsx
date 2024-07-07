import { useDispatch, useSelector } from 'react-redux'
import { IRoot } from '../../types/rootState'
import { ISpell } from '../../types/spell'
import SpellList from '../../components/spell/SpellList'
import SpellDetails from '../../components/spell/SpellDetails'
import LoadingState from '../../components/common/LoadingState'
import ErrorState from '../../components/common/ErrorState'
import useFetchDetails from '../../hooks/useFetchDetails'
import { useEffect } from 'react'
import { setSpellIndex } from '../../redux/reducer/spell'
import NoDataFound from '../../components/common/NoDataFound'

const Favourite = () => {
    const dispatch = useDispatch()
    const { favs, items, activeIndex } = useSelector(
        (state: IRoot) => state.spells
    )
    const { spellDetails } = useFetchDetails()
    const {
        data: spellDetailsResp,
        isLoading: spellDetailsLoading,
        isError: spellDetailsError,
    } = spellDetails()
    const favItems = items.filter((spell) =>
        favs.some((fav) => spell.name.includes(fav))
    )

    useEffect(() => {
        if (favItems?.length) {
            dispatch(setSpellIndex(favItems?.[0]?.index))
        }
    }, [favs])

    if (favItems.length <= 0) {
        return <NoDataFound />
    }

    return (
        <>
            <div className="lg:h-full">
                <div
                    className={`lg:grid ${
                        activeIndex ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
                    }  lg:gap-5 mt-5 transition-all`}
                >
                    <div className="space-y-2 p-3 rounded-md">
                        {favItems?.map((item: ISpell) => {
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
                                            <SpellDetails
                                                {...spellDetailsResp}
                                            />
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {activeIndex && (
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
                    )}
                </div>
            </div>
        </>
    )
}

export default Favourite
