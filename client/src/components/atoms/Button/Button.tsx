import { FC } from 'react'
import { button } from './style'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  color?: 'primary' | 'error'
  width?: string
  text?: string
  disabled?: boolean
  onClick?: () => void
}

export const Button: FC<Props> = ({
  type = 'button',
  color = 'primary',
  width = '200px',
  text = 'Button',
  disabled = false,
  onClick = undefined
}) => (
  <button
    css={button({ width, color })}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    <span>{text}</span>
  </button>
)
