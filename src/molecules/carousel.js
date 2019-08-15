import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'

import {Button} from '../atoms/button'
import {nextIndex, previousIndex} from '../misc-fns'
import {IndicatorBar} from './indicator-bar'

// TODO: reset timer on manual navigation? should be easier with external state manager (i.e. effector)
// TODO: add nocycling prop or check if timeout is 0?
const Carousel = ({images, interval}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const setActiveNumber = useCallback(number => setActiveIndex(number - 1), [])
  // it is expected to images prop to change rarely, not as activeIndex
  // so, we can save some bits by memoizing prev/next callbacks, IMO this is premature now
  const setPreviousCallback = useCallback(
    () => setActiveIndex(previousIndex(images.length)),
    [images],
  )
  const setNextCallback = useCallback(
    () => setActiveIndex(nextIndex(images.length)),
    [images],
  )

  useEffect(() => {
    const intervalHandler = setInterval(setNextCallback, interval)

    return () => clearInterval(intervalHandler)
  }, [])

  const activeImage = images[activeIndex]

  return (
    <div>
      <img src={activeImage.url} alt={activeImage.note} />
      <Button direction="prev" onClick={setPreviousCallback} />
      <Button direction="next" onClick={setNextCallback} />
      <IndicatorBar
        total={images.length}
        active={activeIndex + 1}
        onClick={setActiveNumber}
      />
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      note: PropTypes.string,
    }),
  ).isRequired,
  interval: PropTypes.number,
}

Carousel.defaultProps = {
  interval: 3000,
}

export {Carousel}
