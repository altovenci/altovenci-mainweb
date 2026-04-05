import React from 'react'
import Service from '../pages/service'
import { Outlet } from 'react-router-dom'

const ServiceLayout = () => {
    return (
        <div>
            <Service />
            <Outlet />
        </div>
    )
}
export default ServiceLayout