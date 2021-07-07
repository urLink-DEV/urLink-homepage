import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import { Button } from "../../../common/Button"

import Contents from "../../../locales/ko/translation.json"
import { ContentsWrapper, ButtonWrapper } from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const GetStartedSection: React.FC<WithTranslation> = ({ t: translate }) => {
	const onClick = () => {
		window.open(
			"https://chrome.google.com/webstore/detail/urlink/eimpopfllbjbhgkgomhhpolhlpaapdai?hl=ko"
		)
	}
	return (
		<Container>
			<MiddleBlock animation="reveal">
				<ContentsWrapper>
					<h1>{translate(Contents.getStartedSection.title)}</h1>
					<p>{translate(Contents.getStartedSection.text[0])}</p>
					<p>{translate(Contents.getStartedSection.text[1])}</p>
				</ContentsWrapper>
				<ButtonWrapper>
					<Button
						imgSrc={"logo28.png"}
						fixedWidth="17rem"
						backgroundColor="#fff"
						color="#000"
						onClick={onClick}
					>
						{translate(Contents.getStartedSection.button)}
					</Button>
				</ButtonWrapper>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(GetStartedSection)
