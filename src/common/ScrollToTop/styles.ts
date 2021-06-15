import styled from "styled-components"

export const ScrollUpContainer = styled("div")<any>`
	padding: 10px;
	position: fixed;
	right: 10px;
	bottom: 10px;
	z-index: 10;
	cursor: pointer;
	background: rgb(241, 242, 243);
	text-align: center;
	align-items: center;
	border-radius: 4px;
	transition: all 0.3s ease-in-out;
	visibility: ${(p) => (p.show ? "visible" : "hidden")};
	opacity: ${(p) => (p.show ? "1" : "0")};
	display: flex;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

	&:hover,
	&:active,
	&:focus {
		background: rgb(224, 224, 224);
	}

	@media screen and (max-width: 768px) {
		padding: 5px;
	}
`
