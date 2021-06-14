import { FeatureWrapper, Image } from "./styles"

interface FeatureProps {
	img: string
	topText: any
	bottomText: any
}

const Feature = ({ img, topText, bottomText }: FeatureProps) => {
	return (
		<FeatureWrapper>
			<Image src={img} />
			<h3>{topText}</h3>
			<h3>{bottomText}</h3>
		</FeatureWrapper>
	)
}

export default Feature
