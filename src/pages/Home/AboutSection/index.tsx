import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../baseLayout/Container"
import Feature from "./Feature"

import Contents from "../../../locales/ko/translation.json"
import { TitleWrapper, TextWrapper, FeaturesWrapper } from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const AboutSection: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<Container>
			<MiddleBlock animation="reveal">
				<TitleWrapper>
					<h2>{translate(Contents.aboutSection.title[0])}</h2>
					<h2>{translate(Contents.aboutSection.title[1])}</h2>
				</TitleWrapper>
				<TextWrapper>
					<p>{translate(Contents.aboutSection.text[0])}</p>
					<p>{translate(Contents.aboutSection.text[1])}</p>
				</TextWrapper>
				<FeaturesWrapper>
					<Feature
						img="img_about_1.png"
						topText={translate(Contents.aboutSection.subText[0])}
						bottomText={translate(Contents.aboutSection.subText[1])}
					></Feature>
					<Feature
						img="img_about_2.png"
						topText={translate(Contents.aboutSection.subText[2])}
						bottomText={translate(Contents.aboutSection.subText[3])}
					></Feature>
					<Feature
						img="img_about_3.png"
						topText={translate(Contents.aboutSection.subText[4])}
						bottomText={translate(Contents.aboutSection.subText[5])}
					></Feature>
				</FeaturesWrapper>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(AboutSection)
