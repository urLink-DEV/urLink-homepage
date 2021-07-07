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
	CardsImageWrapper,
	ButtonImageWrapper,
	RowWrapper,
} from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const CardsSection: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<Container>
			<MiddleBlock animation="reveal">
				<Row justify="space-between">
					<Col lg={13} md={13} sm={13} xs={24}>
						<TitleWrapper>
							<h2>{translate(Contents.cardsSection.title[0])}</h2>
							<h2>{translate(Contents.cardsSection.title[1])}</h2>
						</TitleWrapper>
						<TextWrapper>
							<p>{translate(Contents.cardsSection.text[0])}</p>
							<p>{translate(Contents.cardsSection.text[1])}</p>
						</TextWrapper>
					</Col>
					<Col lg={11} md={11} sm={11} xs={24}>
						<CardsImageWrapper>
							<PngImg src={"img_cards_2.png"} width="100%" />
							<PngImg src={"img_m_cards.png"} width="100%" />
						</CardsImageWrapper>
					</Col>
				</Row>
				<RowWrapper>
					<Row justify="space-between">
						<Col lg={13} md={13} sm={13} xs={24}>
							<ImageWrapper>
								<PngImg src={"img_cards_3.png"} width="100%" />
							</ImageWrapper>
						</Col>
						<Col lg={10} md={10} sm={10} xs={24}>
							<ButtonImageWrapper>
								<PngImg src={"img_button_group.png"} width="30%" />
							</ButtonImageWrapper>
							<SubTextWrapper>
								<p>{translate(Contents.cardsSection.subText[0])}</p>
								<p>{translate(Contents.cardsSection.subText[1])}</p>
								<p>{translate(Contents.cardsSection.subText[2])}</p>
							</SubTextWrapper>
						</Col>
					</Row>
				</RowWrapper>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(CardsSection)
