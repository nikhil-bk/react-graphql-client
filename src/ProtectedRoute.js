import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({data,children}) {
    if(!data.user){
        return <Navigate to="/" replace/>
    }
return children
}

export default ProtectedRoute
