import React from 'react'
import { Div, Text, Box } from './styles'
import { PersonalState } from '../../REDUX/REDUCER/Personal'
type Props = {
    personal: PersonalState
    autoMatchingUpdate: (login: string, projectId: number, flag: boolean) => void
}

const Main = ({ personal, autoMatchingUpdate }: Props) => {
    return (
        <Div>
            <Text>Main</Text>
            <Text>{personal.login}</Text>
            {personal.myProject
                .filter(
                    project =>
                        project.state === 'in_progress' ||
                        project.state === 'waiting_for_correction',
                )
                .map((project, i) => (
                    <Box
                        key={`project${i}`}
                        onClick={() =>
                            autoMatchingUpdate(
                                personal.login,
                                project.projectId,
                                !project.autoMatching,
                            )
                        }
                    >
                        <Text>{project.name}</Text>
                        <Text>{project.state}</Text>
                        <Text>{`${project.autoMatching}`}</Text>
                    </Box>
                ))}
        </Div>
    )
}

export default Main
