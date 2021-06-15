import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderSection = styled("header")`
	padding: 3rem 0;

	&.fixed {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		z-index: 9999;
		padding: 1rem 0;
		transition: all 0.3s ease-in-out;
	}

	.ant-row-space-between {
		align-items: center;
		text-align: center;
	}
`

export const LogoContainer = styled(Link)`
	display: flex;
`

export const NavLink = styled("div")`
	display: inline-block;
	text-align: center;
`
export const ButtonWrapper = styled("div")`
	display: none;
	&.show {
		display: block;
	}
`
