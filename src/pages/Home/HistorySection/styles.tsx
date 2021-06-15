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
		margin: 1.5rem 1rem 3rem 0;
	}
`
export const ImageWrapper = styled("div")`
	position: relative;

	div:first-child {
		position: relative;
		z-index: 5;
		img {
			position: absolute;
			top: 4rem;
			left: -2rem;
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
