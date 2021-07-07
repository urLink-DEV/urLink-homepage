import { Col } from "antd"

import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import { PngImg } from "../../../common/PngImg"

import Contents from "../../../locales/ko/translation.json"
import { Row, TitleWrapper, TextWrapper, SubTitleWrapper } from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const CategorySection: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<Container>
			<MiddleBlock animation="reveal">
				<Row>
					<Col lg={11} md={11} sm={11} xs={24}>
						<PngImg src={"img_category.png"} width="80%" />
					</Col>
					<Col lg={12} md={12} sm={12} xs={24}>
						<TitleWrapper>
							<h2>{translate(Contents.categorySection.title[0])}</h2>
							<h2>{translate(Contents.categorySection.title[1])}</h2>
						</TitleWrapper>
						<TextWrapper>
							<p>{translate(Contents.categorySection.text[0])}</p>
							<p>{translate(Contents.categorySection.text[1])}</p>
						</TextWrapper>
						<SubTitleWrapper>
							<h2>
								{translate(Contents.categorySection.title[2])}
								<span>{translate(Contents.categorySection.title[3])}</span>
								{translate(Contents.categorySection.title[4])}
							</h2>
						</SubTitleWrapper>
						<TextWrapper>
							<p>{translate(Contents.categorySection.text[2])}</p>
							<p>{translate(Contents.categorySection.text[3])}</p>
						</TextWrapper>
					</Col>
				</Row>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(CategorySection)
