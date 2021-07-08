import styled from "styled-components"
import { IProps } from "../GetStartedLink"

export const StyledLink = styled("a")<IProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(p) =>
		p.backgroundColor ? p.backgroundColor : "#2083FF"};
	color: ${(p) => (p.color ? p.color : "#fff")};
	font-size: ${(p) => (p.size === "small" ? "1rem" : "1.6rem")};
	font-weight: 700;
	width: ${(p) => (p.fixedWidth ? p.fixedWidth : "100%")};
	border-radius: ${(p) => (p.borderRadius ? p.borderRadius : "100px")};
	padding: ${(p) => (p.size === "small" ? "0.7rem 1.5rem" : "1.2rem 1.5rem")};
	cursor: pointer;
	margin: auto;
	margin-top: ${(p) => (p.size === "small" ? 0 : "0.625rem")};
	border: none;
	transition: all 0.3s ease-in-out;

	> img {
		margin-right: 1rem;
	}
`
