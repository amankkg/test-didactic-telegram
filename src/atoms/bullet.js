import React from 'react'
import PropTypes from 'prop-types'

const Bullet = props => <span>{props.active ? '+' : '-'}</span>

Bullet.propTypes = {
    active: PropTypes.bool,
}

Bullet.defaultProps = {
    active: false,
}

export { Bullet }