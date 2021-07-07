import { useEffect, useState } from "react"
import { Row } from "antd"
import clsx from "clsx"
import { withTranslation, WithTranslation } from "react-i18next"
import i18n from "i18next"
import Container from "../../common/Container"
import { Button } from "../../common/Button"
import { PngImg } from "../../common/PngImg"
import {
	HeaderSection,
	LogoLink,
	GetStartedButton,
	ChangeLanguageButton,
	ButtonGroup,
} from "./styles"
import { getScroll } from "../../common/utils/getWindow"
import Contents from "../../locales/ko/translation.json"

const Header: React.FC<WithTranslation> = ({ t: translate }) => {
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
		setCurrentLanguage(language)
		i18n.changeLanguage(language)
	}

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop)
		return () => {
			window.removeEventListener("scroll", checkScrollTop)
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
						<PngImg src="logo_full.png" width="108px" />
					</LogoLink>
					<ButtonGroup>
						<GetStartedButton
							className={clsx({
								show: fixHeader,
							})}
						>
							<Button size="small" onClick={onClick}>
								{translate(Contents.getStartedSection.button)}
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
