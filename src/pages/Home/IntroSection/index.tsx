import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import { Button } from "../../../common/Button"
import { PngImg } from "../../../common/PngImg"

import Contents from "../../../locales/ko/translation.json"
import { ButtonWrapper } from "./styles"

import { withTranslation } from "react-i18next"

interface IProps {
	t: any
}

const IntroSection: React.FC<IProps> = ({ t }) => {
	const onClick = () => {
		window.open(
			"https://chrome.google.com/webstore/detail/urlink/eimpopfllbjbhgkgomhhpolhlpaapdai?hl=ko"
		)
	}
	return (
		<Container>
			<MiddleBlock animation="reveal" paddingBottom="0px">
				<h1>{t(Contents.introSection.title)}</h1>
				<p>{t(Contents.introSection.text[0])}</p>
				<p>{t(Contents.introSection.text[1])}</p>
				<ButtonWrapper>
					<Button imgSrc={"logo28.png"} fixedWidth="17rem" onClick={onClick}>
						{t(Contents.introSection.button)}
					</Button>
				</ButtonWrapper>
				<PngImg src={"mockup_desktop.png"} width={"100%"} />
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(IntroSection)
