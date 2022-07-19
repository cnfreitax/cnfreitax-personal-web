export type PostType = {
  id: string
  title: string
  date: string
  contentPreview: string
}

export type PostListType = {
  posts: PostType[]
}
