import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../baseLayout/Container"
import { GetStartedLink } from "../../../components/GetStartedLink"
import { PngImg } from "../../../components/PngImg"

import Contents from "../../../locales/ko/translation.json"
import { ButtonWrapper } from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const IntroSection: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<Container>
			<MiddleBlock animation="reveal" paddingBottom="0px">
				<h1>{translate(Contents.introSection.title)}</h1>
				<p>{translate(Contents.introSection.text[0])}</p>
				<p>{translate(Contents.introSection.text[1])}</p>
				<ButtonWrapper>
					<GetStartedLink imgSrc={"logo28.png"} fixedWidth="17rem">
						{translate(Contents.introSection.button)}
					</GetStartedLink>
				</ButtonWrapper>
				<PngImg src={"mockup_desktop.png"} width={"100%"} />
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(IntroSection)
