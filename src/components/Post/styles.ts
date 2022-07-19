import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
`
export const Title = styled.h2`
  color: var(--pink);
  font-weight: 900;
  font-size: ${(props) => props.theme.title};
`

export const PostContent = styled.div`
  margin-top: 24px;
  line-height: 26px;
  font-size: ${(props) => props.theme.textContent}; ;
`
