import { StyledButton } from "./styles"
import { ButtonProps } from "../types"
import { PngImg } from "../PngImg"

export const Button = ({
	type,
	color,
	backgroundColor,
	fixedWidth,
	children,
	borderRadius,
	imgSrc,
	onClick,
}: ButtonProps) => (
	<StyledButton
		type={type}
		color={color}
		backgroundColor={backgroundColor}
		borderRadius={borderRadius}
		fixedWidth={fixedWidth}
		onClick={onClick}
	>
		{imgSrc && <PngImg src={imgSrc} />}
		{children}
	</StyledButton>
)
