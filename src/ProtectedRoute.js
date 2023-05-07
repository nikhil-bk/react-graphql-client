import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({data,children,name}) {

    if(!data?.user){
        return <Navigate to="/login" replace/>
    }
  
  return children
}

export default ProtectedRoute
