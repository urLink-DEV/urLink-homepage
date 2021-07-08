import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../baseLayout/Container"
import { GetStartedLink } from "../../../components/GetStartedLink"
import ImageDesktop from "../../../assets/img/png/mockup_desktop.png"

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
					<GetStartedLink logo={true} fixedWidth="17rem">
						{translate(Contents.introSection.button)}
					</GetStartedLink>
				</ButtonWrapper>
				<img src={ImageDesktop} width="100%" alt="" />
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(IntroSection)
