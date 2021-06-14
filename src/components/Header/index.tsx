import { Row } from "antd"
import { withTranslation } from "react-i18next"
import Container from "../../common/Container"
import { PngImg } from "../../common/PngImg"
import { HeaderSection, LogoContainer } from "./styles"

const Header = ({ t }: any) => {
	return (
		<HeaderSection>
			<Container>
				<Row justify="space-between">
					<LogoContainer to="/" aria-label="homepage">
						<PngImg src="logo_full.png" width="108px" />
					</LogoContainer>
				</Row>
			</Container>
		</HeaderSection>
	)
}

export default withTranslation()(Header)
