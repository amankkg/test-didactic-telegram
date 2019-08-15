import {nextIndex, previousIndex, getNumbersArray} from './misc-fns'

// TODO: add some edge cases and exceptions?
describe('when total length is >1', () => {
  const totalLength = 3

  describe('nextIndex', () => {
    const nextFrom = nextIndex(3)

    it('should return 0 if current index is last', () => {
      const actual = nextFrom(totalLength - 1)

      expect(actual).toBe(0)
    })

    it('should return incremented value if current index is not last', () => {
      const actual = nextFrom(0)

      expect(actual).toBe(1)
    })
  })

  describe('previousIndex', () => {
    const previousFrom = previousIndex(3)

    it('should return last index if current one is 0', () => {
      const actual = previousFrom(0)

      expect(actual).toBe(totalLength - 1)
    })

    it('should return prior value if current index is not first', () => {
      const actual = previousFrom(1)

      expect(actual).toBe(0)
    })
  })

  describe('getNumbersArray', () => {
    it('should return array with exact length', () => {
      const actual = getNumbersArray(totalLength)

      expect(actual.length).toBe(totalLength)
    })

    it('should return array with same starting and ending', () => {
      const actual = getNumbersArray(totalLength)

      expect(actual[0]).toBe(1)
      expect(actual[totalLength - 1]).toBe(totalLength)
    })
  })
})
