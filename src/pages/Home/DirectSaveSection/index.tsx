import { Row, Col } from "antd"

import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import { PngImg } from "../../../common/PngImg"

import Contents from "../../../locales/ko/translation.json"
import { TitleWrapper, TextWrapper } from "./styles"

import { withTranslation } from "react-i18next"

interface DirectSaveSectionProps {
	t: any
}

const DirectSaveSection = ({ t }: DirectSaveSectionProps) => {
	return (
		<Container padding="0 60px 0 0">
			<MiddleBlock animation="reveal" paddingBottom="0px">
				<Row justify="space-between" align="middle">
					<Col lg={11} md={11} sm={12} xs={24}>
						<PngImg src={"img_save_on_chrome.png"} width="100%" />
					</Col>
					<Col lg={11} md={11} sm={12} xs={24}>
						<TitleWrapper>
							<h2>{t(Contents.directSaveSection.title[0])}</h2>
							<h2>{t(Contents.directSaveSection.title[1])}</h2>
						</TitleWrapper>
						<TextWrapper>
							<p>{t(Contents.directSaveSection.text[0])}</p>
							<p>{t(Contents.directSaveSection.text[1])}</p>
						</TextWrapper>
					</Col>
				</Row>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(DirectSaveSection)
