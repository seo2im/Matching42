mkdir $1

echo "import React from 'react'
import $1 from './$1'

const Container = () => {
    return <$1 />
}

export default Container
" >> $1/Container.tsx

echo "import React from 'react'
import { Div, Text } from './styles'

const $1 = () => {
    return (
        <Div>
            <Text>$1</Text>
        </Div>
    )
}

export default $1
" >> $1/$1.tsx

echo "import styled from 'styled-components'
import * as Basic from '../../STYLES/Basic'

export const Div = styled(Basic.Div)``
export const Text = styled(Basic.Text)``
" >> $1/styles.tsx