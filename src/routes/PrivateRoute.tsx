import React from 'react'

interface IProps {
    children: React.ReactNode
}
const PrivateRoute = ({ children }: IProps) => {
    // Auth logic here

    return children
}

export default PrivateRoute
