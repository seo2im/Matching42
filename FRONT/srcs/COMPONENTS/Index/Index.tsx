import React, { useState } from 'react'
import { Div } from './styles'

type Props = {
    link: (login: string) => void
}

const Index = ({ link }: Props) => {
    const [login, setLogin] = useState<string>('')

    return (
        <Div>
            <input value={login} onChange={e => setLogin(e.target.value)} />
            <button onClick={() => link(login)}>Check</button>
        </Div>
    )
}

export default Index
