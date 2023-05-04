import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { useContext } from 'react';
function PrivateRoutes() {
    const { auth } = useAuth();
  return (
    auth.authToken ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes