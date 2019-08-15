import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {Bullet} from '../atoms/bullet'
import {Button} from '../atoms/button'

import {nextIndex, prevIndex} from './carousel-utils'

const Carousel = props => {
    const [activeIndex, setActiveIndex] = useState(0)

    // TODO: memoize?
    const prevFrom = prevIndex(props.images.length)
    const nextFrom = nextIndex(props.images.length)
    const setPrev = () => setActiveIndex(prevFrom(activeIndex))
    const setNext = () => setActiveIndex(nextFrom(activeIndex))

    const first = props.images.length === 1
    const latest = props.images.length === 1

    const activeItem = props.images[activeIndex]

    return (
        <div>
            <p>{activeItem}</p>
            <Button direction="prev" onClick={setPrev} disabled={first} />
            {props.images.map((item, index) => /* TODO: revise key usage */ <Bullet key={item} active={index === activeIndex} />)}
            <Button direction="next" onClick={setNext} disabled={latest} />
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // TODO: should it be image blobs or urls?
    timeout: PropTypes.number, // ms, 0 - auto-rotate is OFF, > 0 - auto-rotate is ON?
}

Carousel.defaultProps = {
    timeout: 3000, // ms, default is auto-rotate is ON and timeout is 3 seconds
}

export { Carousel }