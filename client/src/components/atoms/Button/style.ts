import { css } from '@emotion/react'

type StyleProps = {
  width: string
  color: 'primary' | 'error'
}

export const button = ({ width, color }: StyleProps) => {
  const baseColor = color === 'primary' ? '#066163' : '#F44335'
  return css({
    width,
    minWidth: '100px',
    height: '50px',
    backgroundColor: baseColor,
    borderColor: baseColor,
    borderRadius: '10px',
    color: '#f2f2f2',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:disabled': {
      backgroundColor: 'gray',
      borderColor: 'gray',
      pointerEvents: 'none'
    }
  })
}
