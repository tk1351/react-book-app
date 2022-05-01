import { CSSProperties, FC } from 'react'
import { Image } from '../../atoms/Image/Image'
import {
  description,
  descriptionListWrapper,
  detail,
  listItems,
  title
} from './style'

type List = {
  title: string
  description: string
}

type Props = {
  bookTitle?: string
  imageSrc?: string
  imageHeight?: number | string
  list?: List[]
}

const hiddenOverTwoLine = { WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }

export const Detail: FC<Props> = ({
  bookTitle = '',
  imageSrc = '',
  imageHeight = 350,
  list = []
}) => (
  <div css={detail}>
    <Image src={imageSrc} height={imageHeight} />
    <div css={descriptionListWrapper}>
      <h3 css={title} style={hiddenOverTwoLine as CSSProperties}>
        {bookTitle}
      </h3>
      <dl aria-label="list">
        {list.map((item) => (
          <div css={listItems} key={item.title}>
            <dt>{item.title}</dt>
            <dd css={description}>{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
)
