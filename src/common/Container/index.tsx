import { StyledContainer } from "./styles"
import { ContainerProps } from "../types"

const Container = ({ padding, children }: ContainerProps) => (
	<StyledContainer padding={padding}>{children}</StyledContainer>
)

export default Container
