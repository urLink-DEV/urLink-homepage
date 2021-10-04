import { Suspense, lazy } from 'react'

import ContainerWrapper from '../../baseLayout/ContainerWrapper'
import AboutSection from './AboutSection'
import AlarmSection from './AlarmSection'
import CardsSection from './CardsSection'
import CategorySection from './CategorySection'
import DirectSaveSection from './DirectSaveSection'
import GetStartedSection from './GetStartedSection'
import HistorySection from './HistorySection'
import IntroSection from './IntroSection'

const ScrollToTop = lazy(() => import('../../components/ScrollToTop'))

const Home = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>

      <ContainerWrapper>
        <IntroSection />
      </ContainerWrapper>

      <ContainerWrapper backgroundColor="#f7f9ff">
        <AboutSection />
      </ContainerWrapper>

      <ContainerWrapper>
        <HistorySection />
      </ContainerWrapper>

      <ContainerWrapper>
        <CategorySection />
      </ContainerWrapper>

      <ContainerWrapper backgroundColor="#f7f9ff">
        <DirectSaveSection />
      </ContainerWrapper>

      <ContainerWrapper>
        <CardsSection />
      </ContainerWrapper>

      <ContainerWrapper>
        <AlarmSection />
      </ContainerWrapper>

      <ContainerWrapper backgroundColor="#1D78FF">
        <GetStartedSection />
      </ContainerWrapper>
    </>
  )
}

export default Home
