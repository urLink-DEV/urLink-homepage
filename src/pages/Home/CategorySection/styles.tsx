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
			margin-top: 4rem;
		}
	}
`
export const TitleWrapper = styled("div")`
	margin-bottom: 3rem;

	h2 {
		text-align: left;
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
