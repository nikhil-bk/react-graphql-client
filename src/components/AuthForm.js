import React, { useState } from 'react'

function AuthForm(props) {
    const [credential, setCredential] = useState({
        email: '',
        password: ''
    })
    const [inputRequiredError, setInputRequireError] = useState(false)
    return (
        <div className='row'>
            <form className='col s6' onSubmit={(e) => {
                e.preventDefault()
                if (!credential.email && !credential.password) {
                    setInputRequireError(true)
                } else {
                    setInputRequireError(false)
                    props.onSubmit(credential)
                }

            }} autoComplete="new-password">
                <div className='input-field'>

                    <input
                        type="email"
                        autoComplete="new-password"
                        placeholder='Email'
                        value={credential.email}
                        onChange={e => setCredential({ ...credential, ['email']: e.target.value })}
                    />


                </div>
                <div className='input-field'>

                    <input
                        type="password"
                        autoComplete="new-password"
                        value={credential.password}
                        placeholder='Password'
                        onChange={e => setCredential({ ...credential, ['password']: e.target.value })}
                    />


                </div>
                <div className='errors'>
                    {props?.errors?.errors?.map(error => <div key={error}>{error}</div>)}
                </div>
                {inputRequiredError ? <h6 style={{ color: 'red' }}>Email and Password both required*</h6> : <div></div>}
                <br />

                <button className='btn'>Submit</button>{" "}{props.loading ? <h6>Logging you in, Please wait....</h6> : <div></div>}

            </form>
        </div>
    )
}

export default AuthForm