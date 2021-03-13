import React from 'react'
import { Div, Text } from './styles'
import { PersonalState } from '../../REDUX/REDUCER/Personal'
type Props = {
    personal: PersonalState
}

const Main = ({ personal }: Props) => {
    return (
        <Div>
            <Text>Main</Text>
            <Text>{personal.login}</Text>
            {personal.myProject
                .filter(project => project.state === 'in_progress')
                .map((project, i) => (
                    <Text key={`project${i}`}>{project.name}</Text>
                ))}
        </Div>
    )
}

export default Main
