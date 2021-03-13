import React, { useState } from 'react'
import { Div, Text, Button } from './styles'

type Props = {
    signUp: (password: string) => Promise<void>
}
const SignUp = ({ signUp }: Props) => {
    const [password, setPassword] = useState<string>('')

    return (
        <Div>
            <Text>Sign Up</Text>
            <Text>Password</Text>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Div>
                <Button onClick={() => signUp(password)}>Sign UP</Button>
            </Div>
        </Div>
    )
}

export default SignUp
