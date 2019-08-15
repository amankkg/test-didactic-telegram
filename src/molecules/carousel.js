import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import {Bullet} from '../atoms/bullet'
import {Button} from '../atoms/button'

import {nextIndex, prevIndex} from './carousel-utils'

// TODO: handle bullet indicator click
// TODO: reset timer on manual navigation?
// TODO: add nocycling prop or check if timeout is 0?
const Carousel = ({ images, interval }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const setPrevCallback = useCallback(() => setActiveIndex(prevIndex(images.length)), [images])
    const setNextCallback = useCallback(() => setActiveIndex(nextIndex(images.length)), [images])

    useEffect(() => {
        const intervalHandler = setInterval(setNextCallback, interval)

        return () => clearInterval(intervalHandler)
    }, [])

    const activeImage = images[activeIndex]

    return (
        <div>
            <img src={activeImage.url} alt={activeImage.note} />
            <Button direction="prev" onClick={setPrevCallback} />
            <Button direction="next" onClick={setNextCallback} />
            {images.map(({url}, index) => <Bullet key={index + url} active={index === activeIndex} />)}
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        note: PropTypes.string,
    })).isRequired,
    interval: PropTypes.number,
}

Carousel.defaultProps = {
    interval: 3000,
}

export { Carousel }