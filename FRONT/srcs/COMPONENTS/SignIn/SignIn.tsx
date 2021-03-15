import React, { useState } from 'react'
import { Div, Text, LoginBox, Title, LoginButton, PwInput, PwBox } from './styles'

type Props = {
    signIn: (password: string) => Promise<void>
}
const SignIn = ({ signIn }: Props) => {
    const [password, setPassword] = useState<string>('')

    return (
        <Div>
            <LoginBox>
                <Title>SIGN IN</Title>
                <PwBox>
                    <Text>Password</Text>
                    <PwInput
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </PwBox>
                <LoginButton onClick={() => signIn(password)}>Sign In</LoginButton>
            </LoginBox>
        </Div>
    )
}

export default SignIn
