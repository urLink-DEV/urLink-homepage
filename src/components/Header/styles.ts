import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderSection = styled("header")`
	padding: 3rem 0;

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
