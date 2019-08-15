import React from 'react'
import { render } from 'react-dom'

import { Carousel } from './molecules/carousel'

const rootEl = document.querySelector('#root')

const images = ['foo', 'bar', 'baz']

render(<Carousel images={images} />, rootEl)