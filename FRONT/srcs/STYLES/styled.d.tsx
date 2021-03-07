import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        FontSize: {
            Small: number
            Basic: number
            Logo: number
            Title: number
        }
    }
}
