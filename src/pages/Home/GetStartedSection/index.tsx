import { withTranslation, WithTranslation } from 'react-i18next'

import Container from '../../../baseLayout/Container'
import { GetStartedLink } from '../../../components/GetStartedLink'
import MiddleBlock from '../../../components/MiddleBlock'
import Contents from '../../../locales/ko/translation.json'
import { ContentsWrapper, ButtonWrapper } from './styles'

const GetStartedSection: React.FC<WithTranslation> = ({ t: translate }) => {
  return (
    <Container>
      <MiddleBlock animation="reveal">
        <ContentsWrapper>
          <h1>{translate(Contents.getStartedSection.title)}</h1>
          <p>{translate(Contents.getStartedSection.text[0])}</p>
          <p>{translate(Contents.getStartedSection.text[1])}</p>
        </ContentsWrapper>
        <ButtonWrapper>
          <GetStartedLink logo fixedWidth="17rem" backgroundColor="#fff" color="#000">
            {translate(Contents.getStartedSection.button)}
          </GetStartedLink>
        </ButtonWrapper>
      </MiddleBlock>
    </Container>
  )
}

export default withTranslation()(GetStartedSection)
