import { withTranslation, WithTranslation } from "react-i18next"
import { PngImg } from "../PngImg"
import Container from "../../baseLayout/Container"
import Contents from "../../locales/ko/translation.json"

import {
	FooterSection,
	SideCotentsWrapper,
	LeftSide,
	RightSide,
} from "./styles"

const Footer: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<>
			<FooterSection>
				<Container>
					<SideCotentsWrapper>
						<LeftSide>
							<span>{translate(Contents.footerSection.text[0])}</span>
							<a
								href="https://www.notion.so/vvidstudio/858782886bc643da8831688192c642a9"
								target="_blank"
								rel="noopener noreferrer"
							>
								{translate(Contents.footerSection.text[1])}
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
				</Container>
			</FooterSection>
		</>
	)
}

export default withTranslation()(Footer)
