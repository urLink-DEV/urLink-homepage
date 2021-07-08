import styled from "styled-components"
import { IProps } from "../Container"

export const StyledContainer = styled("div")<IProps>`
	position: relative;
	width: 100%;
	max-width: 1440px;
	margin-right: auto;
	margin-left: auto;
	padding: ${(p) => (p.padding ? p.padding : "0 4rem")};

	@media screen and (max-width: 576px) {
		padding: 0 4rem;
	}
`
