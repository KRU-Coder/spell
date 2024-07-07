import SpellIcon from '../common/icons/SpellIcon'

const CoreSidebar = () => {
    return (
        <div className="h-screen bg-slate-50  px-3 pt-5 fixed top-16 left-0 w-56">
            <div>
                <ul>
                    <li>
                        <button className="font-semibold bg-primary-700 rounded-md p-3 text-white flex items-center gap-3 w-full">
                            <SpellIcon height={30} width={30} color="#fff" />
                            Spell
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CoreSidebar
