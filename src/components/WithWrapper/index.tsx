import { Footer } from 'components/Footer'
import { Header, HeaderType } from 'components/Header'
import React from 'react'
import * as S from './styles'

type WithWrapperType = {
  children: React.ReactNode
  hasHeader?: boolean
  hasFooter?: boolean
} & HeaderType

export const WithWrapper = ({
  children,
  hasHeader,
  hasFooter,
  justTitle
}: WithWrapperType) => {
  return (
    <S.Wrapper>
      <S.Content>
        {hasHeader && <Header justTitle={justTitle} />}
        {children}
        {hasFooter && <Footer />}
      </S.Content>
    </S.Wrapper>
  )
}
