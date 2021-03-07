import React from 'react'
import { Div, Text, Button } from './styles'

type Props = {
    signUp: () => Promise<void>
}
const SignUp = ({ signUp }: Props) => {
    return (
        <Div>
            <Text>Update</Text>
            <Button onClick={() => signUp()}>Sign UP</Button>
        </Div>
    )
}

export default SignUp
