import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoreLayout from '../components/layout/CoreLayout'
import LandingPage from '../pages/landing'
import Favourite from '../pages/favourite'

const RouteWrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoreLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/favourite" element={<Favourite />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteWrapper
