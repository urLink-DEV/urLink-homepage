import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../baseLayout/Container"
import Feature from "./Feature"

import Contents from "../../../locales/ko/translation.json"
import { TitleWrapper, TextWrapper, FeaturesWrapper } from "./styles"
import ImageFeature1 from "../../../assets/img/png/img_about_1.png"
import ImageFeature2 from "../../../assets/img/png/img_about_2.png"
import ImageFeature3 from "../../../assets/img/png/img_about_3.png"

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
						img={ImageFeature1}
						topText={translate(Contents.aboutSection.subText[0])}
						bottomText={translate(Contents.aboutSection.subText[1])}
					></Feature>
					<Feature
						img={ImageFeature2}
						topText={translate(Contents.aboutSection.subText[2])}
						bottomText={translate(Contents.aboutSection.subText[3])}
					></Feature>
					<Feature
						img={ImageFeature3}
						topText={translate(Contents.aboutSection.subText[4])}
						bottomText={translate(Contents.aboutSection.subText[5])}
					></Feature>
				</FeaturesWrapper>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(AboutSection)
