import styled from "styled-components"

export const Row = styled("div")`
	row-gap: 0px;
	align-items: center;
	justify-content: space-between;
	display: flex;
	flex-flow: row wrap;
	@media screen and (max-width: 576px) {
		flex-direction: column-reverse;
		img {
			margin-top: 2rem;
		}
	}
`

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
