// Usually, there are some given array with fixed length and frequently changing current index
// in such cases we don't have to pass array length on every index change
// so, both functions below are curried (more stable parameter comes first)

// TODO: handle exception cases?
export const nextIndex = totalLength => currentIndex => {
    if (currentIndex === totalLength - 1) return 0

    return currentIndex + 1
}

export const prevIndex = totalLength => currentIndex => {
    if (currentIndex === 0) return totalLength - 1

    return currentIndex - 1
}