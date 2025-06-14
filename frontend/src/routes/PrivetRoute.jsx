import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivetRoute = ({allowedRoles}) => {
  return <Outlet />
}

export default PrivetRoute
