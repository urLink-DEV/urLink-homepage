import styled from "styled-components"

export const TitleWrapper = styled("div")`
	margin-bottom: 3rem;

	h2 {
		text-align: left;
	}
	h2:first-child {
		color: #94b0e7;
	}

	@media screen and (max-width: 576px) {
		margin-top: 3rem;
	}
`

export const TextWrapper = styled("div")`
	margin-bottom: 3rem;

	p {
		text-align: left;
	}
`
