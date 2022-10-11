import { useQuery } from '@apollo/client';
import React, { Children } from 'react'
    ;
import { Navigate, useLocation } from 'react-router-dom';
import CurrentUser from '../queries/CurrentUser';

const functionThatReturnComponent=(Component)=><Component/>
 function RequireAuth(children) {
    const { loading, error, data } = useQuery(CurrentUser);
    const location=useLocation()

    console.log(loading, data)


    return functionThatReturnComponent(children)


    // return location.pathname==="/login"? !loading && data?.user? <Navigate to ={"/songs"}/>:functionThatReturnComponent(children):  !loading && data?.user?functionThatReturnComponent(children):<Navigate to ={"/login"}/>





}

export default RequireAuth