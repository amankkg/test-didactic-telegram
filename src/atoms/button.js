import React from 'react'
import PropTypes from 'prop-types'

const Button = ({direction, ...btnProps}) => (
  <button {...btnProps}>{direction === 'prev' ? '<' : '>'}</button>
)

Button.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
}

export {Button}
