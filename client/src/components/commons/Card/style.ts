import { css } from '@emotion/react'

type StyleProps = {
  height: number | string
}

export const card = ({ height }: StyleProps) =>
  css({
    border: '1px solid #066163',
    display: 'flex',
    maxHeight: `${height}px`
  })

export const cardContents = css({
  color: '#383838',
  backgroundColor: '#CDBE78',
  width: 'calc(100vw - 255px)',
  padding: '20px'
})

export const cardLink = css({
  color: '#383838',
  display: 'inline-block',
  textDecoration: 'none',
  '&:visited': {
    color: '#383838',
    textDecoration: 'none'
  }
})

/*
 文章が1行以上になる場合、2行目を非表示にする
 */
export const cardTitle = css({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: 'fit-content'
})

export const cardDescription = css({
  display: '-webkit-box',
  overflow: 'hidden'
})
