import { PostListType } from 'interfaces'
import styled, { css, keyframes } from 'styled-components'
import { getFontSize, getPaletteColor } from 'utils/handleThemeProperty'

const visibleAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0.5 }
  100% { opacity: 1 }
`

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostBox = styled.article<Pick<PostListType, 'justNewPost'>>`
  position: relative;
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
      -moz-animation: ${visibleAnimation} 1s ease-in 1s forwards;
      -webkit-animation: ${visibleAnimation} 1s ease-in 1s forwards;
      -o-animation: ${visibleAnimation} 1s ease-in 1s forwards;
      animation: ${visibleAnimation} 1s ease-in 1s forwards;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
  }

  ${({ justNewPost }) =>
    justNewPost &&
    css`
      &:after {
        content: 'new';
        text-transform: uppercase;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        letter-spacing: 2px;
        font-size: ${getFontSize('small')};
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 12px;
        width: 100%;
        max-width: 70px;
        height: 30px;
        background-color: ${getPaletteColor('pink')};
      }
    `}
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
