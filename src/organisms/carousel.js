import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

import {ArrowButton} from '../atoms/arrow-button'
import {IndicatorBar} from '../molecules/indicator-bar'
import {nextIndex, previousIndex} from '../misc-fns'

const Root = styled.div`
  position: relative;
  margin: auto;
`

const PreviousButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
`

const NextButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  left: 93%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
`

const FooterBar = styled(IndicatorBar)`
  position: absolute;
  top: 93%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 48px;
`

// TODO: add transition animation
// TODO: reset/pause timer: should be easier to do with external state manager (i.e. effector) and it would also unbloat this component
const Carousel = ({images, interval, ...divProps}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  // it is expected to images prop to change rarely, not as `activeIndex`
  // so, we can save some bits by memoizing some callbacks, IMO this is premature now
  const setPreviousCallback = useCallback(
    () => setActiveIndex(previousIndex(images.length)),
    [images],
  )
  const setNextCallback = useCallback(
    () => setActiveIndex(nextIndex(images.length)),
    [images],
  )
  const setActiveNumber = useCallback(number => setActiveIndex(number - 1), [])

  useEffect(() => {
    const intervalHandler = setInterval(setNextCallback, interval)

    return () => clearInterval(intervalHandler)
  }, [])

  const {url, note} = images[activeIndex]

  return (
    <Root {...divProps}>
      <img src={url} alt={note} />
      <PreviousButton direction="left" onClick={setPreviousCallback} />
      <NextButton direction="right" onClick={setNextCallback} />
      <FooterBar
        total={images.length}
        active={activeIndex + 1}
        onClick={setActiveNumber}
      />
    </Root>
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
