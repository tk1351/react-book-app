import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DEVELOPER_NAME } from '../../../constants'

describe('Testing Footer Component', () => {
  describe('Render', () => {
    it('Developer nameが正しく描画されていること', () => {
      render(<Footer />)
      expect(screen.getByText(DEVELOPER_NAME)).toBeInTheDocument()
    })
  })
})
