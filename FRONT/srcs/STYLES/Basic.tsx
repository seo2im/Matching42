import styled from 'styled-components'

export const Div = styled.div``
export const Text = styled.p`
    margin: 0;
    padding: 0;
`
export const Button = styled.button`
    border: none;
`
export const Input = styled.input`
    font-size: 1.2rem;

    width: 12rem;

    padding: 0.4rem;

    border: 1px solid grey;
    border-radius: 2px;

    &:focus {
        border-color: black;
        background: grey;
    }
`
export const LoginButton = styled(Button)`
    display: block;

    font-size: 2rem;
    color: white;

    margin: 1rem auto;
    padding: 0.3rem 0.7rem;

    background: black;
`
