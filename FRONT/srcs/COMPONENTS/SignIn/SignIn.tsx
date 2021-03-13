import React, { useState } from 'react'
import { Div, Text, Button } from './styles'

type Props = {
    signIn: (password: string) => Promise<void>
}
const SignIn = ({ signIn }: Props) => {
    const [password, setPassword] = useState<string>('')

    return (
        <Div>
            <Text>Sign In</Text>
            <Text>Password</Text>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Div>
                <Button onClick={() => signIn(password)}>Sign In</Button>
            </Div>
        </Div>
    )
}

export default SignIn
