import { luizalabs } from 'constants/urls'
import Link from 'next/link'
import { paths } from './paths'
import * as S from './styles'

export type HeaderType = {
  justTitle?: boolean
  hasNavBar?: boolean
}

export const Header = ({ justTitle, hasNavBar }: HeaderType) => {
  return (
    <S.Header>
      <S.HeaderContent>
        <S.Title>eu, cnfreitax.</S.Title>

        <S.Subtitle>
          front end developer at{' '}
          <a href={luizalabs} rel="noreferrer" target="_blank">
            luizalabas | magalu
          </a>
        </S.Subtitle>
        {!justTitle && (
          <S.HeaderDescription>
            desenvolvedor front end no Luizalabs | magalu, estudante de Análise
            e Desenvolvimento de Sistemas e faixa preta de judo.
          </S.HeaderDescription>
        )}

        {hasNavBar && (
          <S.NavBarMenu>
            {paths.map(({ path, text }) => (
              <Link href={path} key={path}>
                <S.NavBarOption selected>
                  <span>{text}</span>
                </S.NavBarOption>
              </Link>
            ))}
          </S.NavBarMenu>
        )}
      </S.HeaderContent>
    </S.Header>
  )
}
