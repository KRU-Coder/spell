import { useDispatch } from 'react-redux'
import DetailsIcon from '../common/icons/DetailsIcon'
import { setSpellIndex } from '../../redux/reducer/spell'

interface IProps {
    index: string | null
    title: string
    is_active?: boolean
}

const SpellList = ({ title, index, is_active }: IProps) => {
    const dispatch = useDispatch()
    const handleIndex = () => {
        dispatch(setSpellIndex(index))
    }
    return (
        <div
            className={`border rounded-md p-3 ${
                is_active ? 'bg-primary-200' : 'bg-white'
            } `}
        >
            <div className="grid grid-cols-2 items-center justify-between">
                <div className="text-primary-700 font-bold">{title}</div>
                <button className="ml-auto " onClick={handleIndex}>
                    <div className="flex items-center justify-center">
                        <DetailsIcon height={25} width={25} color="#0fa5e9" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SpellList
