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
					<ContentWrapper>{children}</ContentWrapper>
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
