import { FC } from 'react'
import { footer, footerContainer, footerTitle } from './style'
import { DEVELOPER_NAME } from '../../../constants'

export const Footer: FC = () => (
  <footer css={footer}>
    <div css={footerContainer}>
      <span css={footerTitle}>{DEVELOPER_NAME}</span>
    </div>
  </footer>
)
