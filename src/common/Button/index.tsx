import { StyledButton } from "./styles"
import { PngImg } from "../PngImg"

interface IProps {
	type?: string
	color?: string
	backgroundColor?: string
	borderRadius?: string
	fixedWidth?: string
	name?: string
	imgSrc?: string
	onClick?: () => void
}

export const Button: React.FC<IProps> = ({
	type,
	color,
	backgroundColor,
	borderRadius,
	fixedWidth,
	onClick,
	imgSrc,
	children,
}) => (
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
