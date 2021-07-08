import { lazy } from "react"

import ContainerWrapper from "../../baseLayout/ContainerWrapper"
import IntroSection from "./IntroSection"
import AboutSection from "./AboutSection"
import HistorySection from "./HistorySection"
import CategorySection from "./CategorySection"
import DirectSaveSection from "./DirectSaveSection"
import CardsSection from "./CardsSection"
import AlarmSection from "./AlarmSection"
import GetStartedSection from "./GetStartedSection"

const ScrollToTop = lazy(() => import("../../components/ScrollToTop"))

const Home = () => {
	return (
		<>
			<ScrollToTop />

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
