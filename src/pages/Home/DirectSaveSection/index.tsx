import { Col } from 'antd'
import { withTranslation, WithTranslation } from 'react-i18next'

import ImageSaveChrome from '../../../assets/img/png/img_save_on_chrome.png'
import ImageSaveChromeWebp from '../../../assets/img/webp/img_save_on_chrome.webp'
import Container from '../../../baseLayout/Container'
import MiddleBlock from '../../../components/MiddleBlock'
import Contents from '../../../locales/ko/translation.json'
import { Row, TitleWrapper, TextWrapper } from './styles'

const DirectSaveSection: React.FC<WithTranslation> = ({ t: translate }) => {
  return (
    <Container padding="0 60px 0 0">
      <MiddleBlock animation="reveal" paddingBottom="0px">
        <Row>
          <Col lg={11} md={11} sm={11} xs={24}>
            <picture>
              <source srcSet={ImageSaveChromeWebp} type="image/webp" />
              <img src={ImageSaveChrome} width="100%" alt="" loading="lazy" />
            </picture>
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
