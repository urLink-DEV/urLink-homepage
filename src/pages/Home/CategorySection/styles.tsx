import styled from "styled-components"

export const TitleWrapper = styled("div")`
	margin-bottom: 3rem;

	h2 {
		text-align: left;
	}

	@media screen and (max-width: 576px) {
		margin-top: 3rem;
	}
`
export const SubTitleWrapper = styled("div")`
	margin-bottom: 3rem;
	margin-top: 8rem;

	h2 {
		font-size: 2.25rem;
		text-align: left;
		span {
			color: #2083ff;
			font-weight: 900;
		}
	}

	@media screen and (max-width: 1024px) {
		margin-bottom: 2rem;
		margin-top: 4rem;
	}
`
export const TextWrapper = styled("div")`
	p {
		text-align: left;
	}
`
