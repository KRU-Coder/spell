import { Link, useLocation } from 'react-router-dom'
import { menu } from '../../constants/menu'

const CoreSidebar = () => {
    const { pathname } = useLocation()
    return (
        <div className="h-screen bg-slate-50  px-3 pt-5 fixed top-16 left-0 w-56">
            <div>
                <ul className="space-y-5">
                    {menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.link}>
                                    <div
                                        className={`font-semibold ${
                                            pathname === item.link
                                                ? 'bg-primary-700 text-white'
                                                : 'bg-primary-300 text-white'
                                        } rounded-md p-3  flex items-center gap-3 w-full`}
                                    >
                                        {item.icon}
                                        {item.title}
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CoreSidebar
