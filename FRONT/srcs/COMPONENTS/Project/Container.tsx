import React, { useEffect } from 'react'
import Project from './Project'
import { useRouter } from 'next/router'
import { useApollo } from '../../HOOK'
import { aGetTeam, aChangeAutoMatching } from '../../QUERY/query'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../REDUX/REDUCER'
import { teamSave, teamInit } from '../../REDUX/REDUCER/Team'
import { personalSave } from '../../REDUX/REDUCER/Personal'

const Container = () => {
    const { Personal, Team } = useSelector((state: RootState) => state)
    const router = useRouter()
    const apolloClient = useApollo()
    const dispatch = useDispatch()

    const project = Personal.myProject.find(
        project => project.projectId === parseInt(router.query.projectId as string),
    )

    const link = (url: string) => {
        router.push(url)
    }

    const getDB = async () => {
        if (project.teamId) {
            try {
                const { data } = await apolloClient.query({
                    query: aGetTeam,
                    variables: { _id: project.teamId },
                })
                console.log(data)
                dispatch(teamSave(data.getTeam))
            } catch (err) {
                console.log(err)
                link('/error')
            }
        } else {
            dispatch(teamInit())
        }
    }

    const autoMathingUpdate = async (login: string, projectId: number, flag: boolean) => {
        try {
            const { data } = await apolloClient.mutate({
                mutation: aChangeAutoMatching,
                variables: { login: login, projectId: projectId, flag: flag },
            })
            if (data.changeAutoMatching)
                dispatch(
                    personalSave(data.changeAutoMatching.login, data.changeAutoMatching.myProject),
                )
        } catch (err) {
            console.log(err)
            link('/error')
        }
    }

    useEffect(() => {
        if (!project) link('/main')
        else getDB()
    }, [])

    return (
        <>
            {project && (
                <Project
                    personal={Personal}
                    project={project}
                    autoMathingUpdate={autoMathingUpdate}
                    team={Team}
                />
            )}
        </>
    )
}

export default Container
