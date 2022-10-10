import { useQuery } from '@apollo/client';
import React, { Children } from 'react'
    ;
import { Navigate, useLocation } from 'react-router-dom';
import CurrentUser from '../queries/CurrentUser';

const functionThatReturnComponent=(Component)=><Component/>
async function RequireAuth(children) {
    const { loading, error, data } = await useQuery(CurrentUser);
    const location=useLocation()

    console.log(loading, data)


    return location.pathname==="/login"? !loading && data?.user? <Navigate to ={"/songs"}/>:functionThatReturnComponent(children):  !loading && data?.user?functionThatReturnComponent(children):<Navigate to ={"/login"}/>





}

export default RequireAuth