import { Row, Col } from 'antd'
import { withTranslation, WithTranslation } from 'react-i18next'

import ImageButtons from '../../../assets/img/png/img_button_group.png'
import ImageCards2 from '../../../assets/img/png/img_cards_2.png'
import ImageCards3 from '../../../assets/img/png/img_cards_3.png'
import ImageMobileCards from '../../../assets/img/png/img_m_cards.png'
import Container from '../../../baseLayout/Container'
import MiddleBlock from '../../../components/MiddleBlock'
import Contents from '../../../locales/ko/translation.json'
import {
  TitleWrapper,
  TextWrapper,
  SubTextWrapper,
  ImageWrapper,
  CardsImageWrapper,
  ButtonImageWrapper,
  FirstRowWrapper,
  LastRowWrapper,
} from './styles'

const CardsSection: React.FC<WithTranslation> = ({ t: translate }) => {
  return (
    <Container>
      <MiddleBlock animation="reveal">
        <FirstRowWrapper>
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
                <img src={ImageCards2} alt="" />
                <img src={ImageMobileCards} alt="" />
              </CardsImageWrapper>
            </Col>
          </Row>
        </FirstRowWrapper>

        <LastRowWrapper>
          <Row justify="space-between">
            <Col lg={13} md={13} sm={13} xs={24}>
              <ImageWrapper>
                <img src={ImageCards3} alt="" />
              </ImageWrapper>
            </Col>
            <Col lg={10} md={10} sm={10} xs={24}>
              <ButtonImageWrapper>
                <img src={ImageButtons} alt="" />
              </ButtonImageWrapper>
              <SubTextWrapper>
                <p>{translate(Contents.cardsSection.subText[0])}</p>
                <p>{translate(Contents.cardsSection.subText[1])}</p>
                <p>{translate(Contents.cardsSection.subText[2])}</p>
              </SubTextWrapper>
            </Col>
          </Row>
        </LastRowWrapper>
      </MiddleBlock>
    </Container>
  )
}

export default withTranslation()(CardsSection)
