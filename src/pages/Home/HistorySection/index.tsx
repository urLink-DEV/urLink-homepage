import { Row, Col } from "antd"
import Reveal, { Fade } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import { PngImg } from "../../../common/PngImg"

import Contents from "../../../locales/ko/translation.json"
import { TitleWrapper, TextWrapper, ImageWrapper } from "./styles"

import { withTranslation } from "react-i18next"

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

interface HistorySectionProps {
	t: any
}

const HistorySection = ({ t }: HistorySectionProps) => {
	return (
		<Container padding="0 0 0 60px">
			<MiddleBlock>
				<Row justify="space-between">
					<Col lg={11} md={11} sm={12} xs={24}>
						<TitleWrapper>
							<h2>{t(Contents.historySection.title[0])}</h2>
							<h2>{t(Contents.historySection.title[1])}</h2>
						</TitleWrapper>
						<TextWrapper>
							<p>{t(Contents.historySection.text[0])}</p>
							<p>{t(Contents.historySection.text[1])}</p>
							<p>{t(Contents.historySection.text[2])}</p>
						</TextWrapper>
					</Col>
					<Col lg={11} md={11} sm={12} xs={24}>
						<ImageWrapper>
							<Reveal keyframes={moveLinkAnimation}>
								<PngImg src={"img_move_link.png"} width="30%" />
							</Reveal>
							<Fade direction="right">
								<PngImg src={"img_history.png"} width="100%" />
							</Fade>
						</ImageWrapper>
					</Col>
				</Row>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(HistorySection)