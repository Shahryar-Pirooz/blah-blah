import { useState } from 'react'
import { Logo } from '../components'
import Message from '../components/message'

const initState = {
    isError: false,
    haveAnAccount: false,
    message: '',
    name: '',
    email: '',
    password: '',
}
export default function Login() {
    const [state, setState] = useState(initState)
    //handlers
    const handleAccount = () =>
        setState({ haveAnAccount: state.haveAnAccount ? false : true })
    return (
        <>
            <div className="login-bg">
                <div className="login-card">
                    <Logo className="my-16 mx-auto text-center text-3xl text-primary" />
                    {state.isError && (
                        <Message bg="bg-error">
                            <p>{state.message}</p>
                        </Message>
                    )}
                    <form method="post" className="space-y-8 px-3">
                        {!state.haveAnAccount && (
                            <input
                                type="text"
                                placeholder="Name"
                                className="input"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input"
                        />
                        <p className="link" onClick={() => handleAccount()}>
                            {state.haveAnAccount
                                ? 'Don’t have an account?'
                                : 'Already have an account?'}
                        </p>
                        <div className="flex justify-center">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
