import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Testing Card Component', () => {
  describe('Render', () => {
    it('正しくCardが描画されていること', () => {
      render(<Card />)
      expect(screen.getByRole('listitem')).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('title', () => {
      it('正しくtitleが渡されていること', () => {
        const expectedTitle = 'expectedTitle'
        render(<Card title={expectedTitle} />)
        expect(screen.getByRole('listitem')).toHaveTextContent(expectedTitle)
      })
    })

    describe('description', () => {
      it('正しくdescriptionが渡されていること', () => {
        const expectedDescription = 'expectedDescription'
        render(<Card description={expectedDescription} />)
        expect(screen.getByRole('listitem')).toHaveTextContent(
          expectedDescription
        )
      })
    })

    describe('href', () => {
      it('aタグに正しくhref属性が渡っていること', () => {
        const expectedHref = 'expectedHref'
        render(<Card href={expectedHref} />)

        const links = screen.getAllByRole('link')
        links.forEach((link) => {
          expect(link).toHaveAttribute('href', expectedHref)
        })
      })
    })
  })
})
