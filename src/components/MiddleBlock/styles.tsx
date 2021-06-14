import styled from "styled-components"

export const MiddleBlockSection = styled("section")<any>`
	position: relative;
	padding-top: 7rem;
	padding-bottom: ${(p) => (p.paddingBottom ? p.paddingBottom : "7rem")};
	text-align: center;
	display: flex;
	> div {
		width: 100%;
	}
	/* justify-content: ${(p) =>
		p.justifyContent ? p.justifyContent : "center"}; */

	h1 {
		font-size: 3.5rem;
		font-weight: 900;
		margin-bottom: 2rem;
	}
	h2 {
		font-size: 2.8rem;
		font-weight: 900;
		margin-bottom: 1.5rem;
		line-height: 1;
	}
	h3 {
		font-size: 1.25rem;
		line-height: 2rem;
	}
	p {
		font-size: 1.5rem;
	}
	button {
		font-size: 1.625rem;
		font-weight: 700;
	}
	@media screen and (max-width: 1024px) {
		padding: 5.5rem 0 3rem;
	}
`

export const ContentWrapper = styled("div")`
	text-align: center;
	width: 100%;
`
