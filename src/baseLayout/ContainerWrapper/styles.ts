import styled from 'styled-components'

/* eslint-disable import/no-cycle */
import { IProps } from '.'

export const StyledContainerWrapper = styled('div')<IProps>`
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : '#fff')};
`
