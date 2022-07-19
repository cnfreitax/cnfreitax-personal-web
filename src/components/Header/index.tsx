import * as S from './styles'

export type HeaderType = {
  justTitle?: boolean
}

export const Header = ({ justTitle }: HeaderType) => {
  return (
    <S.Header>
      <S.HeaderContent>
        <S.Title>eu, cnfreitax.</S.Title>

        <S.Subtitle>front end developer at luizalabas</S.Subtitle>
        {!justTitle && (
          <S.HeaderDescription>
            desenvolvedor front end no Luizalabs | magalu, estudante de Análise
            e Desenvolvimento de Sistemas e faixa preta de judo.
          </S.HeaderDescription>
        )}
      </S.HeaderContent>
    </S.Header>
  )
}
