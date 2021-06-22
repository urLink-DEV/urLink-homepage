import { useEffect, useState } from "react"
import { Row } from "antd"
import clsx from "clsx"
import { withTranslation } from "react-i18next"
import i18n from "i18next"
import Container from "../../common/Container"
import { Button } from "../../common/Button"
import { PngImg } from "../../common/PngImg"
import {
	HeaderSection,
	LogoContainer,
	GetStartedButton,
	ChangeLanguageButton,
	ButtonGroup,
} from "./styles"
import { getScroll } from "../../common/utils/getWindow"
import Contents from "../../locales/ko/translation.json"

const Header = ({ t }: any) => {
	const [fixHeader, setFixHeader] = useState(false)
	const [currentLanguage, setCurrentLanguage] = useState("ko")

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

	const handleChange = (language: string) => {
		if (language === "ko") {
			setCurrentLanguage("ko")
		} else {
			setCurrentLanguage("en")
		}
		i18n.changeLanguage(language)
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
					<ButtonGroup>
						<GetStartedButton
							className={clsx({
								show: Boolean(fixHeader),
							})}
						>
							<Button type="small" onClick={onClick}>
								{t(Contents.getStartedSection.button)}
							</Button>
						</GetStartedButton>
						<ChangeLanguageButton currentLanguage={currentLanguage}>
							<button onClick={() => handleChange("ko")}>한국어</button>
							<button onClick={() => handleChange("en")}>ENG</button>
						</ChangeLanguageButton>
					</ButtonGroup>
				</Row>
			</Container>
		</HeaderSection>
	)
}

export default withTranslation()(Header)
