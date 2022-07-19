import { PostContent } from 'components/Post'
import { WithWrapper } from 'components/WithWrapper'

const Post = () => {
  return (
    <WithWrapper hasHeader justTitle>
      <PostContent />
    </WithWrapper>
  )
}

export default Post
