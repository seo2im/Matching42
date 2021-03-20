import styled from 'styled-components'
import * as Basic from 'srcs/STYLES/Basic'

export const Div = styled(Basic.Div)`
    width: 80%;

    margin: 3rem auto;
`
export const Text = styled(Basic.Text)`
    font-size: 1rem;
`
export const Label = styled(Basic.Text)`
    font-size: 2rem;

    margin-top: 2rem;
    margin-bottom: 1rem;
`
export const Title = styled(Text)`
    font-size: 5rem;
    font-weight: bold;
`
export const ProjectsBox = styled(Basic.Div)`
    display: flex;
    flex-wrap: wrap;

    width: 90%;

    margin: 0 auto;

    border: 1px solid black;
`
export const ProjectBox = styled(Basic.Button)`
    padding: 1rem;
    margin: 1rem;

    border: 1px solid black;
    border-radius: 1rem;

    background: grey;

    &:hover {
        background: black;
        color: white;
    }
`
