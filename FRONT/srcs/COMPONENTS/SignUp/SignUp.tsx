import React, { useState } from 'react'
import { Div, Text, Button } from './styles'

type Props = {
    signUp: (login: string, password: string) => Promise<void>
}
const SignUp = ({ signUp }: Props) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <Div>
            <Text>Sign Up</Text>
            <Text>ID</Text>
            <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
            <Text>Password</Text>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Div>
                <Button onClick={() => signUp(login, password)}>Sign UP</Button>
            </Div>
        </Div>
    )
}

export default SignUp
