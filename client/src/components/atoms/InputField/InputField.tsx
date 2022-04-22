import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react'
import { input } from './style'

type Props = {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  name?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputField: FC<Props> = ({
  type = 'text',
  placeholder = 'Search...',
  name = '',
  value = '',
  onChange = () => {}
}) => (
  <input
    css={input}
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
)
