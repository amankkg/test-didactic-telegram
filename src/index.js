import React from 'react'
import {render} from 'react-dom'

import {Carousel} from './molecules/carousel'

const httpCats = [
  {
    url: 'https://http.cat/400',
    note: 'Bad Request cat',
  },
  {
    url: 'https://http.cat/401',
    note: 'Unauthorized cat',
  },
  {
    url: 'https://http.cat/403',
    note: 'Forbidden cat',
  },
  {
    url: 'https://http.cat/404',
    note: 'Not Found cat',
  },
]

render(
  <>
    <h1>HTTP Cats</h1>
    <Carousel images={httpCats} interval={1337} />
  </>,
  document.querySelector('#root'),
)
