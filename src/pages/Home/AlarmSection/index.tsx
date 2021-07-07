import { Row, Col } from "antd"
import MiddleBlock from "../../../components/MiddleBlock"
import Container from "../../../common/Container"
import { PngImg } from "../../../common/PngImg"

import Contents from "../../../locales/ko/translation.json"
import {
	TitleWrapper,
	ContentsWrapper,
	AlarmImageWrapper,
	BellImageWrapper,
	RowWrapper,
} from "./styles"

import { withTranslation, WithTranslation } from "react-i18next"

const AlarmSection: React.FC<WithTranslation> = ({ t: translate }) => {
	return (
		<Container>
			<MiddleBlock animation="reveal">
				<TitleWrapper>
					<h2>{translate(Contents.alarmSection.title[0])}</h2>
					<h2>{translate(Contents.alarmSection.title[1])}</h2>
				</TitleWrapper>
				<Col lg={24} md={24} sm={24} xs={24}>
					<ContentsWrapper backgroundColor="#F8FAFF" padding="4rem 6rem 0">
						<Row justify="space-between">
							<Col lg={12} md={12} sm={12} xs={24}>
								<div>
									<h3>{translate(Contents.alarmSection.text[0])}</h3>
									<h3>{translate(Contents.alarmSection.text[1])}</h3>
									<h3>{translate(Contents.alarmSection.text[2])}</h3>
									<BellImageWrapper>
										<PngImg src="icon_bell.png" width="100%" />
									</BellImageWrapper>
								</div>
							</Col>
							<Col lg={10} md={10} sm={10} xs={24}>
								<AlarmImageWrapper>
									<PngImg src="img_set_alarm.png" width="100%" />
								</AlarmImageWrapper>
							</Col>
						</Row>
					</ContentsWrapper>
				</Col>
				<RowWrapper>
					<Row justify="space-between">
						<Col lg={12} md={12} sm={12} xs={24}>
							<ContentsWrapper backgroundColor="#5A99F7" padding="2rem 2rem 0">
								<h4>{translate(Contents.alarmSection.text[3])}</h4>
								<PngImg src="img_notifications.png" width="100%" />
							</ContentsWrapper>
						</Col>
						<Col lg={11} md={11} sm={11} xs={24}>
							<ContentsWrapper backgroundColor="#F8F8F8" padding="2rem 2rem 0">
								<h4>{translate(Contents.alarmSection.text[4])}</h4>
								<PngImg src="img_alarms.png" width="80%" />
							</ContentsWrapper>
						</Col>
					</Row>
				</RowWrapper>
			</MiddleBlock>
		</Container>
	)
}

export default withTranslation()(AlarmSection)
