import { FC } from 'react'
import { header, headerTitle, headerContainer } from './style'
import { APP_NAME } from '../../../constants'

export const Header: FC = () => (
  <header css={header}>
    <div css={headerContainer}>
      <span css={headerTitle}>{APP_NAME}</span>
    </div>
  </header>
)
