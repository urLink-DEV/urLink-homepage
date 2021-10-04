import { Row, Col } from 'antd'
import { withTranslation, WithTranslation } from 'react-i18next'

import IconBell from '../../../assets/img/png/icon_bell.png'
import ImageAlarms from '../../../assets/img/png/img_alarms.png'
import ImageNotification from '../../../assets/img/png/img_notifications.png'
import ImageSetAlarm from '../../../assets/img/png/img_set_alarm.png'
import ImageAlarmsWebp from '../../../assets/img/webp/img_alarms.webp'
import ImageNotificationWebp from '../../../assets/img/webp/img_notifications.webp'
import ImageSetAlarmWebp from '../../../assets/img/webp/img_set_alarm.webp'
import Container from '../../../baseLayout/Container'
import MiddleBlock from '../../../components/MiddleBlock'
import Contents from '../../../locales/ko/translation.json'
import { TitleWrapper, ContentsWrapper, AlarmImageWrapper, BellImageWrapper, RowWrapper } from './styles'

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
                    <img src={IconBell} alt="" />
                  </BellImageWrapper>
                </div>
              </Col>
              <Col lg={10} md={10} sm={10} xs={24}>
                <AlarmImageWrapper>
                  <picture>
                    <source srcSet={ImageSetAlarmWebp} type="image/webp" />
                    <img src={ImageSetAlarm} alt="" loading="lazy" />
                  </picture>
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

                <picture>
                  <source srcSet={ImageNotificationWebp} type="image/webp" />
                  <img src={ImageNotification} width="100%" alt="" />
                </picture>
              </ContentsWrapper>
            </Col>
            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentsWrapper backgroundColor="#F8F8F8" padding="2rem 2rem 0">
                <h4>{translate(Contents.alarmSection.text[4])}</h4>
                <picture>
                  <source srcSet={ImageAlarmsWebp} type="image/webp" />
                  <img src={ImageAlarms} width="80%" alt="" />
                </picture>
              </ContentsWrapper>
            </Col>
          </Row>
        </RowWrapper>
      </MiddleBlock>
    </Container>
  )
}

export default withTranslation()(AlarmSection)
