// eslint-disable-next-line import/no-extraneous-dependencies
import { keyframes } from '@emotion/react'
import styled from 'styled-components'

interface MiddleBlockSectionProps {
  paddingBottom?: string
}

export const MiddleBlockSection = styled('section')<MiddleBlockSectionProps>`
  position: relative;
  padding-top: 7rem;
  padding-bottom: ${(p) => (p.paddingBottom ? p.paddingBottom : '7rem')};
  text-align: center;
  display: flex;
  > div {
    width: 100%;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
    line-height: 1.3;
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  h3 {
    font-size: 1.25rem;
    line-height: 2rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  button {
    font-size: 1.625rem;
    font-weight: 700;
  }

  @media screen and (max-width: 576px) {
    padding-top: 5rem;
    padding-bottom: ${(p) => (p.paddingBottom ? p.paddingBottom : '6rem')};

    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      margin-bottom: 0.3rem;
    }
  }
`

export const ContentWrapper = styled('div')`
  text-align: center;
  width: 100%;
`

export const CustomAnimation = keyframes`
from {
	opacity: 0;
	transform: translateY(8rem);
}

to {
	opacity: 1;
	transform: translateY(0);
}
`
