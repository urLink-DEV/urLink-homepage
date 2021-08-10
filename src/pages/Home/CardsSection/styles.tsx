import styled from 'styled-components'

export const TitleWrapper = styled('div')`
  margin-bottom: 3rem;

  h2 {
    text-align: left;
  }
`
export const TextWrapper = styled('div')`
  p {
    text-align: left;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 3rem;
  }
`
export const SubTextWrapper = styled('div')`
  p {
    font-weight: 700;
    text-align: left;
    line-height: 2;
  }
`
export const CardsImageWrapper = styled('div')`
  img {
    width: 100%;
  }
  img:last-child {
    display: none;
  }
  @media screen and (max-width: 576px) {
    margin-left: -40px;
    margin-right: -40px;
    img:first-child {
      display: none;
    }
    img:last-child {
      display: block;
    }
  }
`
export const ButtonImageWrapper = styled('div')`
  text-align: left;
  margin-bottom: 1rem;
  margin-left: -1rem;
  img {
    width: 30%;
  }
`
export const ImageWrapper = styled('div')`
  margin-left: -4rem;
  img {
    width: 100%;
  }
`

export const RowWrapper = styled('div')`
  margin-top: 3rem;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
