import { css } from '@emotion/react'

export const input = css({
  width: '100%',
  height: '50px',
  fontSize: '16px',
  paddingLeft: '12px',
  border: '2px solid #CDBE78',
  '&:hover': {
    borderColor: '#066163'
  },
  '&:focus': {
    borderColor: '#066163'
  }
})
