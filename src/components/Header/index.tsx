import { useEffect, useState } from 'react'

import { Row } from 'antd'
import clsx from 'clsx'
import i18n from 'i18next'
import { withTranslation, WithTranslation } from 'react-i18next'

import ImageLogo from '../../assets/img/png/logo_full.png'
import Container from '../../baseLayout/Container'
import Contents from '../../locales/ko/translation.json'
import getScroll from '../../utils/getScroll'
import { GetStartedLink } from '../GetStartedLink'
import { HeaderSection, LogoLink, GetStartedLinkWrapper, ChangeLanguageButton, ButtonGroup } from './styles'

const Header: React.FC<WithTranslation> = ({ t }) => {
  const [fixHeader, setFixHeader] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('ko')

  const checkScrollTop = (event: any) => {
    const offsetFromTop = getScroll(event.target, true)

    if (!fixHeader && offsetFromTop > 600) {
      setFixHeader(true)
    } else {
      setFixHeader(false)
    }
  }

  const handleChange = (language: Language) => {
    setCurrentLanguage(language)
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
    // eslint-disable-next-line
	}, [])

  return (
    <HeaderSection
      className={clsx({
        fixed: fixHeader,
      })}
    >
      <Container>
        <Row justify="space-between">
          <LogoLink to="/" aria-label="homepage">
            <img src={ImageLogo} alt="urLink" />
          </LogoLink>
          <ButtonGroup>
            <GetStartedLinkWrapper
              className={clsx({
                show: fixHeader,
              })}
            >
              <GetStartedLink logo={false} size="small">
                {t(Contents.getStartedSection.button)}
              </GetStartedLink>
            </GetStartedLinkWrapper>
            <ChangeLanguageButton currentLanguage={currentLanguage}>
              <button type="button" onClick={() => handleChange('ko')}>
                한국어
              </button>
              <button type="button" onClick={() => handleChange('en')}>
                ENG
              </button>
            </ChangeLanguageButton>
          </ButtonGroup>
        </Row>
      </Container>
    </HeaderSection>
  )
}

export default withTranslation()(Header)
