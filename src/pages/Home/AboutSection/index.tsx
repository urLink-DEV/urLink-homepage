import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import Feature from "./Feature"

import Contents from "../../../locales/ko/translation.json"
import { TitleWrapper, TextWrapper, FeaturesWrapper } from "./styles"

import { withTranslation } from "react-i18next"

interface AboutSectionProps {
	t: any
}

const AboutSection = ({ t }: AboutSectionProps) => {
	return (
		<Container>
			<MiddleBlock animation="reveal">
				<TitleWrapper>
					<h2>{t(Contents.aboutSection.title[0])}</h2>
					<h2>{t(Contents.aboutSection.title[1])}</h2>
				</TitleWrapper>
				<TextWrapper>
					<p>{t(Contents.aboutSection.text[0])}</p>
					<p>{t(Contents.aboutSection.text[1])}</p>
				</TextWrapper>
				<FeaturesWrapper>
					<Feature
						img="icon_bell.png"
						topText={t(Contents.aboutSection.subText[0])}
						bottomText={t(Contents.aboutSection.subText[1])}
					></Feature>
					<Feature
						img="icon_bell.png"
						topText={t(Contents.aboutSection.subText[2])}
						bottomText={t(Contents.aboutSection.subText[3])}
					></Feature>
					<Feature
						img="icon_bell.png"
						topText={t(Contents.aboutSection.subText[4])}
						bottomText={t(Contents.aboutSection.subText[5])}
					></Feature>
				</FeaturesWrapper>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(AboutSection)
