import styled from "styled-components"

export const StyledContainerWrapper = styled("div")<any>`
	background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "#fff")};
`
