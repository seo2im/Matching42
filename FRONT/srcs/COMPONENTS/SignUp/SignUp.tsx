import React, { useState } from 'react'
import { Div, Text, LoginBox, Title, LoginButton, PwInput, PwBox } from './styles'

type Props = {
    signUp: (password: string) => Promise<void>
}
const SignUp = ({ signUp }: Props) => {
    const [password, setPassword] = useState<string>('')

    return (
        <Div>
            <LoginBox>
                <Title>Sign Up</Title>
                <Text>You don't have Id, please sign up</Text>
                <PwBox>
                    <Text>Password</Text>
                    <PwInput
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <LoginButton onClick={() => signUp(password)}>Sign UP</LoginButton>
                </PwBox>
            </LoginBox>
        </Div>
    )
}

export default SignUp
