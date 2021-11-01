// styled-components
import {} from "styled-components"
import { CSSProp } from "styled-components"
// theme
import DefaultTheme from "theme/DefaultTheme"

declare module "styled-components" {
    type Theme = typeof DefaultTheme
    export interface DefaultTheme extends Theme {}
}
