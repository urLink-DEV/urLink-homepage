import { Row, Col } from "antd"
import { withTranslation } from "react-i18next"
import Reveal from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

import { MiddleBlockSection, ContentWrapper } from "./styles"

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(8rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`
interface MiddleBlockProps {
	animation?: string
	paddingBottom?: string
	children: React.ReactNode
}

const MiddleBlock = ({
	animation,
	paddingBottom,
	children,
}: MiddleBlockProps) => {
	if (animation === "reveal") {
		return (
			<MiddleBlockSection paddingBottom={paddingBottom}>
				<Reveal keyframes={customAnimation}>
					<Row justify="center" align="middle">
						<ContentWrapper>
							<Col lg={24} md={24} sm={24} xs={24}>
								{children}
							</Col>
						</ContentWrapper>
					</Row>
				</Reveal>
			</MiddleBlockSection>
		)
	} else {
		return (
			<MiddleBlockSection paddingBottom={paddingBottom}>
				<ContentWrapper>{children}</ContentWrapper>
			</MiddleBlockSection>
		)
	}
}

export default withTranslation()(MiddleBlock)
