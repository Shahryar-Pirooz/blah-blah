import { useState } from 'react'
import { Logo } from '../components'

const initState = {
    isError: false,
}
export default function Login() {
    const [setState, getState] = useState(initState)
    return (
        <>
            <div className="login-bg">
                <div className="login-card">
                    <Logo className="my-16 mx-auto text-center text-3xl text-primary" />
                    {/* TODO: Add error message here */}
                    <form action="/dashboard" method="post"></form>
                </div>
            </div>
        </>
    )
}
