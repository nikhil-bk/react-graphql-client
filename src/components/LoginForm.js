import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginMutation from '../mutations/LoginMutation'
import CurrentUser from '../queries/CurrentUser'
import AuthForm from './AuthForm'

function LoginForm() {
    const [login, { data, error, loading }] = useMutation(LoginMutation)
    const [handleErrors, setHandleErrors] = useState({ errors: [] })
    const navigate = useNavigate();

    const onSubmit = ({ email, password }) => {
        console.log(email, password)
      
        login({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query: CurrentUser }],
            awaitRefetchQueries: true





        }).then(res => {
            console.log(res)
            navigate("/songs")
        })
            .catch(res => {
                console.log(res.graphQLErrors)
                const errors = res.graphQLErrors.map(error => error.message)
                setHandleErrors({ errors })
            })


    }




    return (
        <div>
            <h3>Login</h3>
            <AuthForm onSubmit={onSubmit.bind(this)} errors={handleErrors} loading={loading} />

        </div>
    )
}

export default LoginForm