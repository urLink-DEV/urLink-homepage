import { FeatureWrapper, ImageWrapper } from '../styles'

interface IProps {
  img: string
  topText: string
  bottomText: string
}

const Feature: React.FC<IProps> = ({ img, topText, bottomText }) => {
  return (
    <FeatureWrapper>
      <ImageWrapper>
        <img src={img} alt="feature" />
      </ImageWrapper>
      <h3>{topText}</h3>
      <h3>{bottomText}</h3>
    </FeatureWrapper>
  )
}

export default Feature
