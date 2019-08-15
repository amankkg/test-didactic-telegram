import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import {getNumbersArray} from '../misc-fns'
import {Bullet} from '../atoms/bullet'

const IndicatorBar = ({total, active, onClick}) => {
    // we can save on numbers array creation since it is expected to `total` prop to change not so frequently
    // plus, we want to deal with numbers (1 .. total) not indices (0 .. total-1)
    const numbers = useMemo(() => getNumbersArray(total), [total])

    return (
        <div>
            {numbers.map(n =>
                <Bullet key={n} onClick={() => onClick(n)} active={active === n} />)}
        </div>
    )
}

IndicatorBar.propTypes = {
    total: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export { IndicatorBar }