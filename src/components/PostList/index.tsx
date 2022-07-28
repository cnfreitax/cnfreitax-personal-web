import * as S from './styles'
import Link from 'next/link'
import { PostListType } from 'interfaces'

export const PostList = ({ posts, justNewPost }: PostListType) => {
  const formaPostPreview = justNewPost ? posts.slice(0, 0) : posts

  return (
    <S.Wrapper>
      {formaPostPreview.map((post) => (
        <Link
          href={{
            pathname: '/posts/[id]',
            query: {
              id: post.id
            }
          }}
          key={post.id}
        >
          <S.PostBox justNewPost>
            <div>
              <S.PostTile>{post.title}</S.PostTile>
              <span className="span-see-more">clique para ver mais</span>
            </div>
            <S.PostPreView>{post.contentPreview}</S.PostPreView>
          </S.PostBox>
        </Link>
      ))}
    </S.Wrapper>
  )
}
