import styled from "styled-components"

export const TitleWrapper = styled("div")`
	margin-bottom: 5rem;

	h2 {
		text-align: left;
	}
`
export const TextWrapper = styled("div")`
	p {
		text-align: left;
	}
`
export const SubTextWrapper = styled("div")`
	p {
		font-weight: 700;
		text-align: left;
		line-height: 2;
	}
`
export const ContentsWrapper = styled("div")<any>`
	padding: ${(p) => (p.padding ? p.padding : 0)};
	background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "#fff")};
	border-radius: 16px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h3 {
		font-size: 2.1rem;
		text-align: left;
		font-weight: 700;
		line-height: 1.5;
	}
	h3:first-child {
		color: #7ca1ff;
	}
	h4 {
		font-size: 1.5rem;
		color: #fff;
		font-weight: 700;
		line-height: 1.5;
		text-align: left;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 576px) {
		padding: 2rem 2rem 0;
		h3 {
			font-size: 1.7rem;
			text-align: center;
		}
	}
`
export const RowWrapper = styled("div")`
	margin-top: 2rem;

	.ant-col:last-child {
		h4 {
			color: #000;
		}
		img {
			margin: auto;
		}
	}
	.ant-col {
		@media screen and (max-width: 576px) {
			margin-bottom: 1rem;
		}
	}
`

export const AlarmImageWrapper = styled("div")`
	display: inline-block;
	img {
		max-width: 20rem;
	}
`
export const BellImageWrapper = styled("div")`
	width: 7rem;
	margin-top: 1rem;
	@media screen and (max-width: 576px) {
		width: 4rem;
		margin: 1rem auto 1rem;
	}
`
export const NotiImageWrapper = styled("div")``
