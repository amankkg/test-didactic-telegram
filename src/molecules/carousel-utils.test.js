import {nextIndex,prevIndex} from './carousel-utils'

// TODO: add some edge cases and exceptions?
describe('when total length is >1', () => {
    const totalLength = 3

    describe('next', () => {
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

    describe('prev', () => {
        const prevFrom = prevIndex(3)

        it('should return last index if current one is 0', () => {
            const actual = prevFrom(0)

            expect(actual).toBe(totalLength - 1)
        })

        it('should return prior value if current index is not first', () => {
            const actual = prevFrom(1)

            expect(actual).toBe(0)
        })
    })
})