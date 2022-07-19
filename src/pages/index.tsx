import { PostList } from 'components/PostList'
import { WithWrapper } from 'components/WithWrapper'

import { PostListType, PostType } from 'interfaces'

const Home = ({ posts }: PostListType) => {
  return (
    <WithWrapper hasHeader>
      <PostList posts={posts} />
    </WithWrapper>
  )
}

export async function getStaticProps() {
  const posts: PostType[] = [
    {
      id: 'anyid',
      title: 'Esse é um artigo',
      contentPreview: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containin`,
      date: '2022-07-19T04:02:55.198Z'
    }
  ]

  return {
    props: {
      posts: posts
    }
  }
}

export default Home
