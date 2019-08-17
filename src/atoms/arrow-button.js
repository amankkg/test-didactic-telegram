import React from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

const Polyline = styled.polyline`
  fill: none;
  stroke: #fff;
  stroke-opacity: 0.7;
  stroke-width: 2.5;
  stroke-miterlimit: 0.1;
`

const Root = styled.span`
  cursor: pointer;

  &:hover ${Polyline} {
    stroke-opacity: 1;
  }
`

const directionMap = new Map()
  .set('left', '69, 12 31, 50 69, 88')
  .set('right', '31, 12 69, 50 31, 88')

// we rely on tabIndex and onClick props since button is usually interactive control (span is not)
const ArrowButton = ({direction, ...buttonProps}) => (
  <Root {...buttonProps}>
    <svg viewBox="0 0 100 100">
      <Polyline points={directionMap.get(direction)} />
    </svg>
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
