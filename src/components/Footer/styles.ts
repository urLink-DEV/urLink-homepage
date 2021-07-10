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
		margin-right: 1rem;
		font-size: 0.9rem;
		color: #333;
	}
	a:hover {
		color: #2083ff;
	}
	@media screen and (max-width: 375px) {
		max-width: 17rem;
	}
`

export const RightSide = styled("div")`
	img {
		width: 1.6rem;
	}
`
