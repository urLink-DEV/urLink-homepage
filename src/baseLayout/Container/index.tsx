import { StyledContainer } from "./styles"

export interface IProps {
	padding?: string;
}

const Container: React.FC<IProps> = ({ padding, children }) => (
	<StyledContainer padding={padding}>{children}</StyledContainer>
)

export default Container
