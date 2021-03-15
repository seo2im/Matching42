import React, { useState } from 'react'
import { IdBox, Div, Text, IdInput, LoginBox, LoginButton, Title } from './styles'

type Props = {
    link: (login: string) => void
}

const Index = ({ link }: Props) => {
    const [login, setLogin] = useState<string>('')

    return (
        <Div>
            <LoginBox>
                <Title>Matching 42</Title>
                <IdBox>
                    <Text>intra ID</Text>
                    <IdInput value={login} onChange={e => setLogin(e.target.value)} />
                </IdBox>
                <LoginButton onClick={() => link(login)}>CHECK 42</LoginButton>
            </LoginBox>
        </Div>
    )
}

export default Index
