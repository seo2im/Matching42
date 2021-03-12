import React, { useState } from 'react'
import { Div, Text, Button } from './styles'

type Props = {
    signIn: (login: string, password: string) => Promise<void>
}
const SignIn = ({ signIn }: Props) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <Div>
            <Text>Sign In</Text>
            <Text>ID</Text>
            <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
            <Text>Password</Text>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Div>
                <Button onClick={() => signIn(login, password)}>Sign In</Button>
            </Div>
        </Div>
    )
}

export default SignIn
