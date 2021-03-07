import React, { useState } from 'react'
import { Div } from './styles'

type Props = {
    link: (id: string) => void
}

const Index = ({ link }: Props) => {
    const [id, setId] = useState<string>('')

    return (
        <Div>
            <input value={id} onChange={e => setId(e.target.value)} />
            <button onClick={() => link(id)}>Check</button>
        </Div>
    )
}

export default Index
