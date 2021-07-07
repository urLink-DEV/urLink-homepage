import styled from "styled-components"
import { Link } from "react-router-dom"

interface currentLanguageIProps {
	currentLanguage: string;
}

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
export const LogoLink = styled(Link)`
	display: flex;
	@media screen and (max-width: 375px) {
		img {
			width: 70px;
		}
	}
`

export const ButtonGroup = styled("div")`
	display: flex;
`
export const GetStartedButton = styled("div")`
	display: none;
	&.show {
		display: block;
	}
`
export const ChangeLanguageButton = styled("div")<currentLanguageIProps>`
	margin-left: 1rem;
	button {
		font-size: 1rem;
		padding: 0.7rem 0.5rem;
		color: #2083ff;
	}
	button:first-child {
		padding-right: 0;
		font-weight: ${(p) => (p.currentLanguage === "ko" ? 900 : 300)};
	}
	button:first-child::after {
		content: "|";
		color: #2083ff;
		font-weight: 300;
		margin-left: 0.5rem;
	}
	button:last-child {
		font-weight: ${(p) => (p.currentLanguage === "en" ? 900 : 300)};
	}
`
