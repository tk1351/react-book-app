import { render, screen } from '@testing-library/react'
import { Detail } from './Detail'

describe('Testing Detail Component', () => {
  describe('Render', () => {
    it('正しくDetailが描画されていること', () => {
      render(<Detail bookTitle="" imageSrc="" imageHeight="" list={[]} />)
      expect(screen.getByRole('heading')).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('bookTitle', () => {
      it('正しくbookTitleが渡されていること', () => {
        const expectedBookTitle = 'expectedBookTitle'
        render(<Detail bookTitle={expectedBookTitle} />)
        expect(screen.getByRole('heading')).toHaveTextContent(expectedBookTitle)
      })
    })

    describe('list', () => {
      it('正しくlistが渡されていること', () => {
        const list = [{ title: 'title', description: 'description' }]
        render(<Detail list={list} />)
        expect(screen.getByLabelText('list')).toBeInTheDocument()
      })
    })
  })
})
