import { Row, Col } from "antd"

import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import { PngImg } from "../../../common/PngImg"

import Contents from "../../../locales/ko/translation.json"
import {
	TitleWrapper,
	TextWrapper,
	SubTextWrapper,
	ImageWrapper,
	ButtonImageWrapper,
	RowWrapper,
} from "./styles"

import { withTranslation } from "react-i18next"

interface CardsSectionProps {
	t: any
}

const CardsSection = ({ t }: CardsSectionProps) => {
	return (
		<Container>
			<MiddleBlock animation="reveal">
				<Row justify="space-between">
					<Col lg={13} md={13} sm={12} xs={24}>
						<TitleWrapper>
							<h2>{t(Contents.cardsSection.title[0])}</h2>
							<h2>{t(Contents.cardsSection.title[1])}</h2>
						</TitleWrapper>
						<TextWrapper>
							<p>{t(Contents.cardsSection.text[0])}</p>
							<p>{t(Contents.cardsSection.text[1])}</p>
						</TextWrapper>
					</Col>
					<Col lg={11} md={11} sm={12} xs={24}>
						<PngImg src={"img_cards_2.png"} width="100%" />
					</Col>
				</Row>
				<RowWrapper>
					<Row justify="space-between">
						<Col lg={13} md={13} sm={12} xs={24}>
							<ImageWrapper>
								<PngImg src={"img_cards_3.png"} width="100%" />
							</ImageWrapper>
						</Col>
						<Col lg={9} md={11} sm={12} xs={24}>
							<ButtonImageWrapper>
								<PngImg src={"img_button_group.png"} width="30%" />
							</ButtonImageWrapper>
							<SubTextWrapper>
								<p>{t(Contents.cardsSection.subText[0])}</p>
								<p>{t(Contents.cardsSection.subText[1])}</p>
								<p>{t(Contents.cardsSection.subText[2])}</p>
							</SubTextWrapper>
						</Col>
					</Row>
				</RowWrapper>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(CardsSection)
