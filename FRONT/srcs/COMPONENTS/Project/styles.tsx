import styled from 'styled-components'
import * as Basic from '../../STYLES/Basic'

export const Div = styled(Basic.Div)``
export const Text = styled(Basic.Text)`
    margin: 0.5rem 0 0 1rem;

    font-size: 1.5rem;
`

export const Title = styled(Text)`
    margin-left: 1rem;

    font-size: 6rem;
    font-weight: bold;
`
export const AutoMatchingChange = styled(Basic.Button)`
    margin: 1rem 0 3rem 1rem;
    padding: 0.5rem 1rem;

    font-size: 1rem;
    background: grey;

    &:hover {
        background: black;
        color: white;
    }
`
export const TeamBox = styled(Basic.Div)`
    margin: 1rem 0 0 1rem;

    border: 1px solid black;
`
