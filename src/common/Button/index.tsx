import { StyledButton } from "./styles"
import { PngImg } from "../PngImg"

export interface IProps {
	size?: string
	color?: string
	backgroundColor?: string
	borderRadius?: string
	fixedWidth?: string
	name?: string
	imgSrc?: string
	onClick?: () => void
}

export const Button: React.FC<IProps> = ({
	size,
	color,
	backgroundColor,
	borderRadius,
	fixedWidth,
	onClick,
	imgSrc,
	children,
}) => (
	<StyledButton
		size={size}
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
