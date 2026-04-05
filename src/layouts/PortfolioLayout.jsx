import React from 'react'
import Portfolio from '../pages/portfolio'
import { Outlet } from 'react-router-dom'


const PortfolioLayout = () => {
    return (
        <div>
            <Portfolio />
            <Outlet />
        </div>
    )
}
export default PortfolioLayout
