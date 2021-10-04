import { Col } from 'antd'
import { withTranslation, WithTranslation } from 'react-i18next'

import ImageCategory from '../../../assets/img/png/img_category.png'
import ImageCategoryWebp from '../../../assets/img/webp/img_category.webp'
import Container from '../../../baseLayout/Container'
import MiddleBlock from '../../../components/MiddleBlock'
import Contents from '../../../locales/ko/translation.json'
import { Row, TitleWrapper, TextWrapper, SubTitleWrapper } from './styles'

const CategorySection: React.FC<WithTranslation> = ({ t: translate }) => {
  return (
    <Container>
      <MiddleBlock animation="reveal">
        <Row>
          <Col lg={11} md={11} sm={11} xs={24}>
            <picture>
              <source srcSet={ImageCategoryWebp} type="image/webp" />
              <img src={ImageCategory} width="80%" alt="" loading="lazy" />
            </picture>
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
