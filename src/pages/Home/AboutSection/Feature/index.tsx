import { FeatureWrapper, ImageWrapper } from '../styles'

interface IProps {
  img: string
  webp: string
  topText: string
  bottomText: string
}

const Feature: React.FC<IProps> = ({ img, webp, topText, bottomText }) => {
  return (
    <FeatureWrapper>
      <ImageWrapper>
        <picture>
          <source srcSet={webp} type="image/webp" />
          <img src={img} alt="feature" loading="lazy" />
        </picture>
      </ImageWrapper>
      <h3>{topText}</h3>
      <h3>{bottomText}</h3>
    </FeatureWrapper>
  )
}

export default Feature
