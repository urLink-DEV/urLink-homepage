import styled from "styled-components"

export const FooterSection = styled("footer")`
	background: rgb(241, 242, 243);
	padding: 2.5rem 0;
`

export const SideCotentsWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const LeftSide = styled("div")`
	font-size: 0.9rem;
	color: #333;
	display: flex;
	flex-wrap: wrap;
	span {
		margin-right: 1rem;
	}
	a {
		font-size: 0.9rem;
		color: #333;
	}
`

export const RightSide = styled("div")`
	img {
		width: 1.6rem;
	}
`
