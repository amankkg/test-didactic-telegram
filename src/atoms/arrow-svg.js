import React from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

const Polyline = styled.polyline`
  fill: none;
  stroke: #fff;
  stroke-width: 360;
  stroke-miterlimit: 10;
`

const ArrowSvg = ({direction, ...svgProps}) => {
  const arrowPoints =
    direction === 'left'
      ? '11040, 1920 4960, 8000 11040, 14080'
      : '4960,1920 11040, 8000 4960, 14080'

  return (
    <Svg {...svgProps}>
      <Polyline points={arrowPoints} />
    </Svg>
  )
}

export {ArrowSvg}
