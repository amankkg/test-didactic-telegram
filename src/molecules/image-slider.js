import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'linaria'
import {styled} from 'linaria/react'
import cx from 'classnames'

import {getAnimationParameterX, usePrevious} from '../misc-fns'

const Root = styled.div`
  position: relative;
  width: 1080px;
  height: 490px;
  margin: auto;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
`

const active = css`
  animation: slide-in var(--duration) forwards;

  @keyframes slide-in {
    0% {
      transform: translateX(var(--from));
    }

    100% {
      transform: translateX(var(--to));
    }
  }
`

const inactive = css`
  animation: slide-out var(--duration) forwards;

  @keyframes slide-out {
    0% {
      transform: translateX(var(--from));
    }

    100% {
      transform: translateX(var(--to));
      display: none;
    }
  }
`

// TODO: animation on slide jump
const ImageSlider = ({images, current, transitionSpeed, ...divProps}) => {
  const previousValue = usePrevious(current)
  const previous = isNaN(previousValue) ? -1 : previousValue
  const {in: _in, out} = getAnimationParameterX(previous, current)

  const renderImage = ({className, style, ...props}, index) => {
    const isCurrent = index === current
    const {fromX, toX} = isCurrent ? _in : out

    props.className = cx(className, {
      [inactive]: !isCurrent,
      [active]: isCurrent,
    })

    props.style = {
      ...(style || {}),
      '--from': fromX + '%',
      '--to': toX + '%',
      '--duration': transitionSpeed + 'ms',
    }

    return <Image key={index + props.src} {...props} />
  }

  return <Root {...divProps}> {images.map(renderImage)} </Root>
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  current: PropTypes.number.isRequired,
  transitionSpeed: PropTypes.number, // milliseconds
}

ImageSlider.defaultProps = {
  transitionSpeed: 500,
}

export {ImageSlider}
