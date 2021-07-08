import { StyledLink } from "./styles"
import getLocalStorageItem from "../../utils/getLocalStorageItem"
import ImageLogo from "../../assets/img/png/logo28.png"

export interface IProps {
	size?: string
	color?: string
	backgroundColor?: string
	borderRadius?: string
	fixedWidth?: string
	logo?: boolean
}

export const GetStartedLink: React.FC<IProps> = ({
	size,
	color,
	backgroundColor,
	borderRadius,
	fixedWidth,
	children,
	logo,
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
			{logo && <img src={ImageLogo} alt="link to chrome webstore" />}
			{children}
		</StyledLink>
	)
}
