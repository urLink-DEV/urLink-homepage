import { useEffect, useState } from "react"
import { Row } from "antd"
import clsx from "clsx"
import { withTranslation } from "react-i18next"
import Container from "../../common/Container"
import { Button } from "../../common/Button"
import { PngImg } from "../../common/PngImg"
import { HeaderSection, LogoContainer, ButtonWrapper } from "./styles"
import { getScroll } from "../../common/utils/getWindow"
import Contents from "../../locales/ko/translation.json"

const Header = ({ t }: any) => {
	const [fixHeader, setFixHeader] = useState(false)

	const checkScrollTop = (event: any) => {
		const offsetFromTop = getScroll(event.target, true)

		if (!fixHeader && offsetFromTop > 600) {
			setFixHeader(true)
		} else {
			setFixHeader(false)
		}
	}

	const onClick = () => {
		window.open(
			"https://chrome.google.com/webstore/detail/urlink/eimpopfllbjbhgkgomhhpolhlpaapdai?hl=ko"
		)
	}

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop)
		return () => {
			window.removeEventListener("scroll", checkScrollTop)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<HeaderSection
			className={clsx({
				fixed: Boolean(fixHeader),
			})}
		>
			<Container>
				<Row justify="space-between">
					<LogoContainer to="/" aria-label="homepage">
						<PngImg src="logo_full.png" width="108px" />
					</LogoContainer>
					<ButtonWrapper
						className={clsx({
							show: Boolean(fixHeader),
						})}
					>
						<Button type="small" onClick={onClick}>
							{t(Contents.getStartedSection.button)}
						</Button>
					</ButtonWrapper>
				</Row>
			</Container>
		</HeaderSection>
	)
}

export default withTranslation()(Header)
