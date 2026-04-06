import React from 'react'
import Portfolio from '../pages/portfolio'
import { Outlet } from 'react-router-dom'


const PortfolioLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
export default PortfolioLayout
