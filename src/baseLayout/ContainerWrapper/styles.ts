import styled from "styled-components"
import { IProps } from "../ContainerWrapper"

export const StyledContainerWrapper = styled("div")<IProps>`
	background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "#fff")};
`
