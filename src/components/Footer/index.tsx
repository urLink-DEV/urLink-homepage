import { withTranslation } from "react-i18next"
import { PngImg } from "../../common/PngImg"
import Container from "../../common/Container"
import Contents from "../../locales/ko/translation.json"

// import i18n from "i18next"
import {
	FooterSection,
	SideCotentsWrapper,
	LeftSide,
	RightSide,
} from "./styles"

const Footer = ({ t }: any) => {
	// const handleChange = (language: string) => {
	// 	i18n.changeLanguage(language)
	// }

	return (
		<>
			<FooterSection>
				<Container>
					<SideCotentsWrapper>
						<LeftSide>
							<span>{t(Contents.footerSection.text[0])}</span>
							<a
								href="https://www.notion.so/vvidstudio/858782886bc643da8831688192c642a9"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t(Contents.footerSection.text[1])}
							</a>
						</LeftSide>

						<RightSide>
							<a
								href="https://www.notion.so/vvidstudio/c936d72ea9a2415ea8ca5395d8d8cf22"
								target="_blank"
								rel="noopener noreferrer"
							>
								<PngImg src="icon_notion.png" />
							</a>
						</RightSide>
					</SideCotentsWrapper>

					{/* <LanguageSwitch onClick={() => handleChange("en")}>
							<SvgIcon
								src="united-states.svg"
								aria-label="homepage"
								width="30px"
								height="30px"
							/>
						</LanguageSwitch> */}
				</Container>
			</FooterSection>
		</>
	)
}

export default withTranslation()(Footer)
