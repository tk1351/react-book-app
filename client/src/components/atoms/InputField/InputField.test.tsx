import { render, screen } from '@testing-library/react'
import { InputField } from './InputField'

describe('Testing InputField Component', () => {
  describe('Render', () => {
    it('inputが正しく描画されていること', () => {
      render(<InputField />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('type', () => {
      it('inputのtype属性に正しく値が渡っていること', () => {
        render(<InputField type="text" />)
        expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
      })
    })

    describe('placeholder', () => {
      it('inputのplaceholder属性に正しく値が渡っていること', () => {
        const expectedPlaceholder = 'expectedPlaceholder'
        render(<InputField placeholder={expectedPlaceholder} />)
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'placeholder',
          expectedPlaceholder
        )
      })
    })

    describe('name', () => {
      it('inputのname属性に正しく値が渡っていること', () => {
        const expectedName = 'expectedName'
        render(<InputField name={expectedName} />)
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'name',
          expectedName
        )
      })
    })

    describe('value', () => {
      it('inputのvalue属性に正しく値が渡っていること', () => {
        const expectedValue = 'expectedValue'
        render(<InputField value={expectedValue} />)
        expect(screen.getByRole('textbox')).toHaveValue(expectedValue)
      })
    })
  })
})
