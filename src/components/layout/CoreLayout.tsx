import { Outlet } from 'react-router-dom'
import CoreHeader from './CoreHeader'
import CoreSidebar from './CoreSidebar'

const CoreLayout = () => {
    return (
        <>
            <CoreHeader />

            <div className="lg:flex">
                <div className="hidden lg:block">
                    <CoreSidebar />
                </div>

                <div className="w-full pt-20 lg:pl-60 lg:pr-5">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default CoreLayout
