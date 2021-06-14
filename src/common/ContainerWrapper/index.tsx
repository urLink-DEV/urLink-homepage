import { StyledContainerWrapper } from "./styles"
import { ContainerWrapperProps } from "../types"

const ContainerWrapper = ({
	backgroundColor,
	children,
}: ContainerWrapperProps) => (
	<StyledContainerWrapper backgroundColor={backgroundColor}>
		{children}
	</StyledContainerWrapper>
)

export default ContainerWrapper
