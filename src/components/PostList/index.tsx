import * as S from './styles'
import Link from 'next/link'
import { PostListType } from 'interfaces'

export const PostList = ({ posts }: PostListType) => {
  return (
    <S.Wrapper>
      {posts.map((post) => (
        <Link
          href={{
            pathname: '/post/[id]',
            query: {
              id: post.id
            }
          }}
          key={post.id}
        >
          <S.PostBox>
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
