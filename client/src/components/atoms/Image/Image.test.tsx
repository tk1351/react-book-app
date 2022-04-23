import { render, screen } from '@testing-library/react'
import { Image } from './Image'

describe('Testing Image Component', () => {
  describe('Render', () => {
    it('正しくImageが描画されていること', () => {
      render(<Image />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('src', () => {
      it('imgのsrc属性に正しく値が渡っていること', () => {
        const expectedSrc = 'expectedSrc'
        render(<Image src={expectedSrc} />)
        expect(screen.getByRole('img')).toHaveAttribute('src', expectedSrc)
      })
    })

    describe('height', () => {
      it('imgのheight属性に正しく値が渡っていること', () => {
        const expectedHeight = '200'
        render(<Image height={expectedHeight} />)
        expect(screen.getByRole('img')).toHaveAttribute(
          'height',
          expectedHeight
        )
      })
    })
  })
})
