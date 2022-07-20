import styled from 'styled-components'
import { getFontSize, getPaletteColor } from 'utils/handleThemeProperty'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostBox = styled.article`
  width: 100%;
  text-align: start;
  cursor: pointer;
  & + & {
    margin-top: 22px;
  }

  .span-see-more {
    font-size: 1.1rem;
    margin-left: 5px;
    padding: 4px;
    opacity: 0;
  }

  &:hover {
    .span-see-more {
      opacity: 1;
      transition: 0.8s opacity;
    }
  }
`

export const PostContent = styled.div`
  margin-top: 24px;
  line-height: 26px;
  font-size: ${getFontSize('textContent')};
`

export const PostTile = styled.span`
  font-size: ${getFontSize('title')};
  font-weight: 900;
  letter-spacing: 1.2px;
  color: ${getPaletteColor('pink')};
`

export const PostPreView = styled.p`
  overflow: hidden;
  line-height: 24px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 5px;
  letter-spacing: 0.8px;
  font-size: ${getFontSize('paragraph')};
`
