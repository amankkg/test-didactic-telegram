import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

import {Bullet} from '../atoms/bullet'
import {getNumbersArray} from '../misc-fns'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Indicator = styled(Bullet)`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  margin-right: 4px;
`

const IndicatorBar = ({total, active, onClick, ...divProps}) => {
  // we can save on array creation since it is expected to `total` prop to change not so frequently
  const numbers = useMemo(() => getNumbersArray(total), [total])

  return (
    <Root {...divProps}>
      {numbers.map(n => (
        <Indicator
          key={n}
          active={active === n}
          onClick={() => onClick(n)}
          tabIndex={0}
        />
      ))}
    </Root>
  )
}

IndicatorBar.propTypes = {
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export {IndicatorBar}
