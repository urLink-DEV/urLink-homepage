import { StyledLink } from "./styles"
import { PngImg } from "../PngImg"
import { getLocalStorageItem } from "../../utils/getLocalStorageItem"
export interface IProps {
	size?: string
	color?: string
	backgroundColor?: string
	borderRadius?: string
	fixedWidth?: string
	name?: string
	imgSrc?: string
}

export const GetStartedLink: React.FC<IProps> = ({
	size,
	color,
	backgroundColor,
	borderRadius,
	fixedWidth,
	imgSrc,
	children,
}) => {
	const selectedLanguage = getLocalStorageItem("i18nextLng")
	const URL =
		"https://chrome.google.com/webstore/detail/urlink/eimpopfllbjbhgkgomhhpolhlpaapdai?hl=" +
		selectedLanguage

	return (
		<StyledLink
			size={size}
			color={color}
			backgroundColor={backgroundColor}
			borderRadius={borderRadius}
			fixedWidth={fixedWidth}
			href={URL}
			target="_blank"
			rel="noopener noreferrer"
		>
			{imgSrc && <PngImg src={imgSrc} />}
			{children}
		</StyledLink>
	)
}
