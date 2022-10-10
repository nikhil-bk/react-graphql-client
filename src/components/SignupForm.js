import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpMutation from '../mutations/SignupMutation'
import CurrentUser from '../queries/CurrentUser'
import AuthForm from './AuthForm'

function SignupForm() {
  const [signup, { data, error, loading }] = useMutation(SignUpMutation)
  const [handleErrors, setHandleErrors] = useState({ errors: [] })
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    console.log(email, password)
    signup({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: CurrentUser }],
  awaitRefetchQueries:true
    }).then(res=>navigate("/songs"))
      .catch(res => {
        console.log(res.graphQLErrors)
        const errors = res.graphQLErrors.map(error => error.message)
        setHandleErrors({ errors })
      })

  }
  return (
    <div>
      <h3>Sing Up</h3>
      <AuthForm onSubmit={onSubmit.bind(this)} errors={handleErrors} loading={loading}/>
    </div>
  )
}

export default SignupForm