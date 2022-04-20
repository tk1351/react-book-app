import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { APP_NAME } from '../../../constants'

describe('Testing Header Component', () => {
  describe('Render', () => {
    it('AppNameが正しく描画されていること', () => {
      render(<Header />)
      expect(screen.getByText(APP_NAME)).toBeInTheDocument()
    })
  })
})
