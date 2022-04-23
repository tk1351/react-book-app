import { FC } from 'react'

type Props = {
  src?: string
  height?: number | string
}

export const Image: FC<Props> = ({ src = '', height = 200 }) => (
  <img src={src} alt="" decoding="async" height={height} />
)
