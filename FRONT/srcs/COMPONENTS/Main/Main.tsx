import React from 'react'
import { Div, Text, ProjectsBox, ProjectBox, Title, Label } from './styles'
import { PersonalState } from '../../REDUX/REDUCER/Personal'
type Props = {
    personal: PersonalState
    link: (url: string) => void
}

const Main = ({ personal, link }: Props) => {
    return (
        <Div>
            <Title>{personal.login}`s Projects</Title>
            <Label>Project List</Label>
            <ProjectsBox>
                {personal.myProject
                    .filter(
                        project =>
                            project.state === 'in_progress' ||
                            project.state === 'waiting_for_correction',
                    )
                    .map((project, i) => (
                        <ProjectBox
                            key={`project${i}`}
                            onClick={() => link(`/project?projectId=${project.projectId}`)}
                        >
                            <Text>{project.name}</Text>
                            <Text>{project.state}</Text>
                            <Text>{`${project.autoMatching}`}</Text>
                        </ProjectBox>
                    ))}
            </ProjectsBox>
        </Div>
    )
}

export default Main
