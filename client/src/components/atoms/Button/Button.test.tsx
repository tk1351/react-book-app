import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Testing Button Component', () => {
  describe('Render', () => {
    it('正しくButtonが描画されていること', () => {
      render(<Button />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('type', () => {
      it('buttonのtype属性に正しく値が渡っていること', () => {
        render(<Button type="submit" />)
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
      })
    })

    describe('text', () => {
      it('buttonのtextに正しく値が渡っていること', () => {
        const expectedText = 'expectedText'
        render(<Button text={expectedText} />)
        expect(screen.getByRole('button')).toHaveTextContent(expectedText)
      })
    })

    describe('disabled', () => {
      it('buttonのdisabled属性に正しく値が渡っていること', () => {
        render(<Button disabled />)
        expect(screen.getByRole('button')).toBeDisabled()
      })
    })
  })
})
