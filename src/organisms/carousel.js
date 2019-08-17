import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

import {CarouselButton} from '../molecules/carousel-button'
import {IndicatorBar} from '../molecules/indicator-bar'
import {nextIndex, previousIndex} from '../misc-fns'

const Root = styled.div`
  position: relative;
  margin: auto;
`

const LeftsideButton = styled(CarouselButton)`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`

const RightsideButton = styled(CarouselButton)`
  position: absolute;
  top: 50%;
  left: 93%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`

const FooterBar = styled(IndicatorBar)`
  position: absolute;
  top: 93%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
`

// TODO: add animation
// TODO: reset timer on manual navigation? should be easier with external state manager (i.e. effector)
// TODO: add `nocycling` prop or check if `timeout` is 0?
const Carousel = ({images, interval, ...rootDivProps}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const setActiveNumber = useCallback(number => setActiveIndex(number - 1), [])
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

  useEffect(() => {
    const intervalHandler = setInterval(setNextCallback, interval)

    return () => clearInterval(intervalHandler)
  }, [])

  const {url, note} = images[activeIndex]

  return (
    <Root {...rootDivProps}>
      <img src={url} alt={note} />
      <LeftsideButton direction="prev" onClick={setPreviousCallback} />
      <RightsideButton direction="next" onClick={setNextCallback} />
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