import ReactGA from 'react-ga'
import { withTranslation, WithTranslation } from 'react-i18next'

import IconNotion from '../../assets/img/png/icon_notion.png'
import Container from '../../baseLayout/Container'
import Contents from '../../locales/ko/translation.json'
import { FooterSection, SideCotentsWrapper, LeftSide, RightSide } from './styles'

const Footer: React.FC<WithTranslation> = ({ t: translate }) => {
  const handleClickTermsOfServiceTracking = () => {
    ReactGA.event({
      category: 'landing page',
      action: 'go terms of service page',
      label: 'terms of service link clicked',
    })
  }
  const handleClickMailTracking = () => {
    ReactGA.event({
      category: 'landing page',
      action: 'click to send mail',
      label: 'send mail btn clicked',
    })
  }
  const handleClickUrlinkNotionTracking = () => {
    ReactGA.event({
      category: 'landing page',
      action: 'go Ulink notion page',
      label: 'Urlink notion page link clicked',
    })
  }
  return (
    <>
      <FooterSection>
        <Container>
          <SideCotentsWrapper>
            <LeftSide>
              <a
                onClick={handleClickTermsOfServiceTracking}
                href="https://www.notion.so/vvidstudio/858782886bc643da8831688192c642a9"
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate(Contents.footerSection.text[1])}
              </a>
              <a onClick={handleClickMailTracking} href="mailto:admin@urlink-official.com">
                {translate(Contents.footerSection.text[2])}
              </a>
              <span>{translate(Contents.footerSection.text[0])}</span>
            </LeftSide>

            <RightSide>
              <a
                onClick={handleClickUrlinkNotionTracking}
                href="https://www.notion.so/vvidstudio/c936d72ea9a2415ea8ca5395d8d8cf22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconNotion} alt="notion" />
              </a>
            </RightSide>
          </SideCotentsWrapper>
        </Container>
      </FooterSection>
    </>
  )
}

export default withTranslation()(Footer)
