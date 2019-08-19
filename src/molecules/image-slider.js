import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'linaria'
import {styled} from 'linaria/react'
import cx from 'classnames'

const Root = styled.div`
  position: relative;
  width: 1080px;
  height: 490px;
  margin: auto;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  display: none;
`

const active = css`
  display: block;
  animation: slide-in var(--animation-duration) forwards;

  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`

// TODO: useRef to animate previous active item slide out
const ImageSlider = ({images, current, transitionSpeed, ...divProps}) => {
  const renderImage = ({className, style = {}, ...props}, index) => {
    props.className = cx(className, {[active]: index === current})
    props.style = {...style, '--animation-duration': transitionSpeed + 'ms'}

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
