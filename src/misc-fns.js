// Usually, there are some given array with fixed length and frequently changing current index
// in such cases we don't have to pass array length on every index change
// so, both functions below are curried (more stable parameter comes first)

// TODO: handle exception cases?
export const nextIndex = length => currentIndex => {
    if (currentIndex === length - 1) return 0

    return currentIndex + 1
}

export const prevIndex = length => currentIndex => {
    if (currentIndex === 0) return length - 1

    return currentIndex - 1
}

// we want to deal with numbers (1 .. total) not indices (0 .. total-1)
// also, this is a way to prevent react's array-index-as-a-key warning
export const getNumbersArray = length => Array.from({length}, (_, i) => i + 1)