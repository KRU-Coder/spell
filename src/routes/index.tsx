import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoreLayout from '../components/layout/CoreLayout'
import PrivateRoute from './PrivateRoute'
import LandingPage from '../pages/landing'

const RouteWrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoreLayout />}>
                    <Route index element={<LandingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteWrapper
