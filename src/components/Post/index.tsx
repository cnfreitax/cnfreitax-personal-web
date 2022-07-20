import * as S from './styles'
import { useRouter } from 'next/router'

export const PostContent = () => {
  const router = useRouter()

  return (
    <S.Content>
      <S.Title onClick={() => router.back()}>post title</S.Title>

      <S.PostContent>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containin
        </p>
      </S.PostContent>
    </S.Content>
  )
}
