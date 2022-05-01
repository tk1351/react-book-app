import { css } from '@emotion/react'

export const detail = css({
  display: 'flex',
  gap: '100px'
})

export const title = css({
  fontSize: '24px',
  display: '-webkit-box',
  overflow: 'hidden'
})

export const descriptionListWrapper = css({
  width: '700px',
  minHeight: '500px',
  backgroundColor: '#CDBE78',
  color: '#383838',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px 0'
})

export const listItems = css({
  display: 'grid',
  gridTemplateRows: 'auto auto auto',
  gridTemplateColumns: '200px 1fr',
  alignItems: 'self-start',
  margin: '20px 0'
})

export const description = css({
  fontWeight: 'bold',
  minHeight: '50px'
})
