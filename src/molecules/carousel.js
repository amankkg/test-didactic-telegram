import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import {Bullet} from '../atoms/bullet'
import {Button} from '../atoms/button'

import {nextIndex, prevIndex} from './carousel-utils'

const Carousel = props => {
    const [activeIndex, setActiveIndex] = useState(0)

    const setPrevCallback = useCallback(() => setActiveIndex(prevIndex(props.images.length)), [props.images])
    const setNextCallback = useCallback(() => setActiveIndex(nextIndex(props.images.length)), [props.images])

    // TODO: reset timer on manual navigation?
    useEffect(() => {
        const intervalHandler = setInterval(setNextCallback, props.interval)

        return () => clearInterval(intervalHandler)
    }, [])

    // TODO: allow cycling? add nocycling prop?
    const first = props.images.length === 1
    const latest = props.images.length === 1

    const activeItem = props.images[activeIndex]

    return (
        <div>
            <img src={activeItem} alt={activeItem} />
            <Button direction="prev" onClick={setPrevCallback} disabled={first} />
            {props.images.map((item, index) => /* TODO: revise key usage */ <Bullet key={item} active={index === activeIndex} />)}
            <Button direction="next" onClick={setNextCallback} disabled={latest} />
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // TODO: should it be image blobs or urls?
    interval: PropTypes.number, // ms, 0 - auto-rotate is OFF, > 0 - auto-rotate is ON?
}

Carousel.defaultProps = {
    interval: 3000, // ms, default is auto-rotate is ON and timeout is 3 seconds
}

export { Carousel }