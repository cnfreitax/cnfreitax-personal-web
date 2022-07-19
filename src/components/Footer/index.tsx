import * as S from './styles'

export const Footer = () => {
  const links = [
    {
      key: 'LinkedIn',
      link: 'http://www.linkedin.com'
    },
    {
      key: 'GitHub',
      link: 'http://www.linkedin.com'
    }
  ]

  return (
    <S.Footer>
      {links.map((a) => (
        <a key={a.key} href={a.link}>
          {a.key}
        </a>
      ))}
    </S.Footer>
  )
}
