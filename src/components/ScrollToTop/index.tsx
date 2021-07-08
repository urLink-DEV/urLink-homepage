import { useEffect, useState } from "react"
import IconScrollTop from "../../assets/img/svg/scroll-top.svg"
import { ScrollUpContainer } from "./styles"
import { getScroll } from "../../utils/getWindow"

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false)

	const checkScrollTop = (event: any) => {
		const offsetFromTop = getScroll(event.target, true)

		if (!showScroll && offsetFromTop > 350) {
			setShowScroll(true)
		} else if (offsetFromTop <= 350) {
			setShowScroll(false)
		}
	}

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop)
		return () => {
			window.removeEventListener("scroll", checkScrollTop)
		}
		// eslint-disable-next-line
	}, [])

	return (
		<ScrollUpContainer onClick={scrollUp} show={showScroll}>
			<img src={IconScrollTop} width="20px" height="20px" alt="scroll to top" />
		</ScrollUpContainer>
	)
}

export default ScrollToTop
