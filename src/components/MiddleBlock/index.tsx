import Reveal from 'react-awesome-reveal'
import { withTranslation, WithTranslation } from 'react-i18next'

import { MiddleBlockSection, ContentWrapper, CustomAnimation } from './styles'

export interface IProps extends WithTranslation {
  animation?: 'reveal' | ''
  paddingBottom?: string
}

const MiddleBlock: React.FC<IProps> = ({ animation, paddingBottom, children }) => {
  if (animation === 'reveal') {
    return (
      <MiddleBlockSection paddingBottom={paddingBottom}>
        <Reveal keyframes={CustomAnimation}>
          <ContentWrapper>{children}</ContentWrapper>
        </Reveal>
      </MiddleBlockSection>
    )
  }
  return (
    <MiddleBlockSection paddingBottom={paddingBottom}>
      <ContentWrapper>{children}</ContentWrapper>
    </MiddleBlockSection>
  )
}

export default withTranslation()(MiddleBlock)
