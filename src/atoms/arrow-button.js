import React from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

const Root = styled.span`
  cursor: pointer;
`

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

const directionMap = new Map()
  .set('left', '11040, 1920 4960, 8000 11040, 14080')
  .set('right', '4960,1920 11040, 8000 4960, 14080')

// TODO: add hover styles, border, background, disabled logic
const ArrowButton = ({direction, ...buttonProps}) => (
  <Root {...buttonProps}>
    <Svg viewBox="0 0 16000 16000">
      <Polyline points={directionMap.get(direction)} />
    </Svg>
  </Root>
)

ArrowButton.propTypes = {
  direction: PropTypes.oneOf([...directionMap.keys()]).isRequired,
  onClick: PropTypes.func.isRequired,
}

ArrowButton.defaultProps = {
  tabIndex: 0,
}

export {ArrowButton}
