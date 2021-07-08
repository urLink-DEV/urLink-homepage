import { Row, Col } from "antd"
import Reveal, { Fade } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../baseLayout/Container"
import ImageMoveLink from "../../../assets/img/png/img_move_link.png"
import ImageHistory from "../../../assets/img/png/img_history.png"

import Contents from "../../../locales/ko/translation.json"
import { TitleWrapper, TextWrapper, ImageWrapper } from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const moveLinkAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(12rem,6rem,0);
  }

  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`

const HistorySection: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<Container padding="0 0 0 60px">
			<MiddleBlock>
				<Row justify="space-between">
					<Col lg={11} md={11} sm={12} xs={24}>
						<TitleWrapper>
							<h2>{translate(Contents.historySection.title[0])}</h2>
							<h2>{translate(Contents.historySection.title[1])}</h2>
						</TitleWrapper>
						<TextWrapper>
							<p>{translate(Contents.historySection.text[0])}</p>
							<p>{translate(Contents.historySection.text[1])}</p>
							<p>{translate(Contents.historySection.text[2])}</p>
						</TextWrapper>
					</Col>
					<Col lg={11} md={11} sm={12} xs={24}>
						<ImageWrapper>
							<Reveal keyframes={moveLinkAnimation}>
								<img src={ImageMoveLink} width="30%" alt="" />
							</Reveal>
							<Fade direction="right">
								<img src={ImageHistory} width="100%" alt="" />
							</Fade>
						</ImageWrapper>
					</Col>
				</Row>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(HistorySection)
