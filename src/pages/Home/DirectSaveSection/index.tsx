import { Col } from "antd"

import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../baseLayout/Container"
import { PngImg } from "../../../components/PngImg"

import Contents from "../../../locales/ko/translation.json"
import { Row, TitleWrapper, TextWrapper } from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const DirectSaveSection: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<Container padding="0 60px 0 0">
			<MiddleBlock animation="reveal" paddingBottom="0px">
				<Row>
					<Col lg={11} md={11} sm={11} xs={24}>
						<PngImg src={"img_save_on_chrome.png"} width="100%" />
					</Col>
					<Col lg={11} md={11} sm={12} xs={24}>
						<TitleWrapper>
							<h2>{translate(Contents.directSaveSection.title[0])}</h2>
							<h2>{translate(Contents.directSaveSection.title[1])}</h2>
						</TitleWrapper>
						<TextWrapper>
							<p>{translate(Contents.directSaveSection.text[0])}</p>
							<p>{translate(Contents.directSaveSection.text[1])}</p>
						</TextWrapper>
					</Col>
				</Row>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(DirectSaveSection)
