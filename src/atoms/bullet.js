import React from 'react'
import PropTypes from 'prop-types'

const Bullet = props => (
  <button onClick={props.onClick}>{props.active ? '+' : '-'}</button>
)

Bullet.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

Bullet.defaultProps = {
  active: false,
}

export {Bullet}
