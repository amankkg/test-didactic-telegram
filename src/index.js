import React from 'react'
import { render } from 'react-dom'

import { Carousel } from './molecules/carousel'

const rootEl = document.querySelector('#root')

const images = ['https://http.cat/400', 'https://http.cat/401', 'https://http.cat/402', 'https://http.cat/403', 'https://http.cat/404']

render((
    <>
        <h1>HTTP Cats</h1>
        <Carousel images={images} />
    </>
), rootEl)