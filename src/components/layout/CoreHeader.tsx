import logo from '../../assets/logo.png'
const CoreHeader = () => {
    return (
        <div className="p-3 bg-slate-50 fixed top-0 left-0 w-full">
            <div className="flex items-center gap-5">
                <div className="w-10 h-10 ">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-full h-full object-cover"
                    />
                </div>
                <strong className="font-bold text-primary-700 text-xl">
                    My Spell
                </strong>
            </div>
        </div>
    )
}

export default CoreHeader
