import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'linaria'
import {styled} from 'linaria/react'
import cx from 'classnames'

// in some cases CSS class API is suitable rather than styled API
// here we have re-usable CSS rules for `Svg` and `circle` which depend on `Root`'s hover and activeClass
const baseClass = css`
  fill: #000;
  fill-opacity: 0.3;
  stroke: #000;
  stroke-width: 7;
  stroke-miterlimit: 0.1;
  stroke-opacity: 0.3;
`

const activeClass = css`
  .${baseClass} {
    fill: #fff;
    fill-opacity: 0.7;
    stroke-opacity: 0.5;
  }
`

const Root = styled.span`
  cursor: pointer;

  &:hover .${baseClass} {
    fill: #fff;
    fill-opacity: 0.5;
    stroke-opacity: 0.5;
  }
`

// unlike ArrowBu tton, Bullet is not required to  be interactive
// that's why we do not require `ta bIndex` prop here
const Bullet = ({active, className, ...spanProps}) => {
  const spanClass = cx(className, {[activeClass]: active})

  return (
    <Root {...spanProps} className={spanClass}>
      <svg viewBox="0 0 100 100" className={baseClass}>
        <circle cx="50" cy="50" r="36" className={baseClass} />
      </svg>
    </Root>
  )
}

Bullet.propTypes = {
  active: PropTypes.bool,
}

Bullet.defaultProps = {
  active: false,
}

export {Bullet}
