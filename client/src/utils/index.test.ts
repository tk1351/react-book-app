import { hiddenOverLine } from './index'

describe('hiddenOverLine', () => {
  it('渡ってきたclampに応じて返り値が正しく反映されていること', () => {
    const expectedClamp = 3
    const result = hiddenOverLine(expectedClamp)
    expect(result).toStrictEqual({
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: expectedClamp
    })
  })
})
