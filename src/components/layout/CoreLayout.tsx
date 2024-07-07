import { Outlet } from 'react-router-dom'
import CoreHeader from './CoreHeader'
import CoreSidebar from './CoreSidebar'

const CoreLayout = () => {
    return (
        <>
            <CoreHeader />
            <div className="flex">
                <CoreSidebar />
                <div className="w-full pt-20 pl-60 pr-5">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default CoreLayout
