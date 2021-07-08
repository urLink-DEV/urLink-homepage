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

export const ImageWrapper = styled("div")`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 13.5rem;
	height: 13.5rem;
	margin-bottom: 1rem;
	img {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		width: 9rem;
		height: 9rem;
	}
`
