import { FeatureWrapper, ImageWrapper } from "./styles"
import { PngImg } from "../../../common/PngImg"
interface FeatureProps {
	img: string
	topText: any
	bottomText: any
}

const Feature = ({ img, topText, bottomText }: FeatureProps) => {
	return (
		<FeatureWrapper>
			<ImageWrapper>
				<PngImg src={img} width="100%" />
			</ImageWrapper>
			<h3>{topText}</h3>
			<h3>{bottomText}</h3>
		</FeatureWrapper>
	)
}

export default Feature
