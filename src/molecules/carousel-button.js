import React from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

import {ArrowSvg} from '../atoms/arrow-svg'

const RootSpan = styled.span`
  cursor: pointer;
`

// TODO: add hover styles, border, background
const CarouselButton = ({direction, ...rootSpanProps}) => {
  const arrowDirection = direction === 'prev' ? 'left' : 'right'

  return (
    <RootSpan {...rootSpanProps}>
      <ArrowSvg direction={arrowDirection} viewBox="0 0 16000 16000" />
    </RootSpan>
  )
}

CarouselButton.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
}

CarouselButton.defaultProps = {
  tabIndex: 0,
}

export {CarouselButton}
