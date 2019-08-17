import React, {useMemo} from 'react'
import PropTypes from 'prop-types'

import {Bullet} from '../atoms/bullet'
import {getNumbersArray} from '../misc-fns'

const IndicatorBar = ({total, active, onClick, ...rootDivProps}) => {
  // we can save on array creation since it is expected to `total` prop to change not so frequently
  const numbers = useMemo(() => getNumbersArray(total), [total])

  return (
    <div {...rootDivProps}>
      {numbers.map(n => (
        <Bullet key={n} onClick={() => onClick(n)} active={active === n} />
      ))}
    </div>
  )
}

IndicatorBar.propTypes = {
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export {IndicatorBar}
