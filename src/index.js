import React from 'react'
import { render } from 'react-dom'

import { Carousel } from './molecules/carousel'

const rootEl = document.querySelector('#root')

render(<Carousel />, rootEl)