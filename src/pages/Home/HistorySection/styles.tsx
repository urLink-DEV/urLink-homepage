import styled from "styled-components"

export const TitleWrapper = styled("div")`
	margin-bottom: 3rem;

	h2 {
		text-align: left;
	}
`
export const TextWrapper = styled("div")`
	p {
		text-align: left;
	}
	p:last-child {
		color: #2083ff;
		font-size: 1.15rem;
		font-weight: 300;
		margin-top: 1.5rem;
	}
`
export const ImageWrapper = styled("div")`
	position: relative;

	div:first-child {
		position: relative;
		z-index: 5;
		img {
			position: absolute;
			top: 3rem;
			left: -6rem;
		}
	}
	div:last-child {
		position: relative;
		z-index: 3;
	}
`

export const ButtonWrapper = styled("div")`
	margin-top: 2.3rem;
	margin-bottom: 5rem;
`
