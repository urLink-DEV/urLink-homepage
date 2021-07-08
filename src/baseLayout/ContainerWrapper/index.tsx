import { StyledContainerWrapper } from "./styles"

export interface IProps {
	backgroundColor?: string;
}

const ContainerWrapper: React.FC<IProps> = ({ backgroundColor, children }) => (
	<StyledContainerWrapper backgroundColor={backgroundColor}>
		{children}
	</StyledContainerWrapper>
)

export default ContainerWrapper
