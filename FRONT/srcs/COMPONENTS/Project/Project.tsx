import React from 'react'
import { Div, Text, Title, AutoMatchingChange, TeamBox } from './styles'
import { teamState } from '../../REDUX/REDUCER/Team'
import { PersonalState, myProject } from '../../REDUX/REDUCER/Personal'

type Prop = {
    personal: PersonalState
    project: myProject
    autoMathingUpdate: (login: string, projectId: number, flag: boolean) => void
    team?: teamState
}
const Team = ({ personal, project, autoMathingUpdate, team }: Prop) => {
    return (
        <Div>
            <Title>{project.name}</Title>
            <Text>Auto Matching? :{project.autoMatching ? 'AUTO MATCHED' : 'NONE'}</Text>
            <AutoMatchingChange
                onClick={() =>
                    autoMathingUpdate(personal.login, project.projectId, !project.autoMatching)
                }
            >
                Change
            </AutoMatchingChange>
            <Text>TEAM</Text>
            <TeamBox>
                {team && team.users.map((user, i) => <Text key={`key${i}`}>{user}</Text>)}
            </TeamBox>
        </Div>
    )
}

export default Team
