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
`
export const FeaturesWrapper = styled("div")`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding-top: 3rem;
`
export const FeatureWrapper = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 1rem;
`

export const Image = styled("div")<any>`
	background-image: url(${(p) => `/img/png/${p.src}`});
	background-position: center;
	background-size: cover;
	border-radius: 50%;
	width: 13.5rem;
	height: 13.5rem;
	margin-bottom: 1rem;

	@media screen and (max-width: 768px) {
		width: 9rem;
		height: 9rem;
	}
`
