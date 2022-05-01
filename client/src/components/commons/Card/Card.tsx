import { CSSProperties, FC } from 'react'
import { Image } from '../../atoms/Image/Image'
import {
  card,
  cardContents,
  cardDescription,
  cardLink,
  cardTitle
} from './style'
import { hiddenOverLine } from '../../../utils'

type Props = {
  title?: string
  description?: string
  src?: string
  href?: string
  height?: number | string
}

export const Card: FC<Props> = ({
  title = '',
  description = '',
  src = '',
  href = 'http://example.com',
  height = 170
}) => (
  <li css={card({ height })}>
    <a href={href} css={cardLink} target="_blank" rel="noopener noreferrer">
      <Image src={src} height={height} />
    </a>
    <div css={cardContents}>
      <a href={href} css={cardLink} target="_blank" rel="noopener noreferrer">
        <h3 css={cardTitle}>{title}</h3>
      </a>
      <p css={cardDescription} style={hiddenOverLine(4) as CSSProperties}>
        {description}
      </p>
    </div>
  </li>
)
