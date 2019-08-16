import React from 'react'
import {render} from 'react-dom'
import {styled} from 'linaria/react'

import {Hr} from './atoms/hr'
import {Carousel} from './organisms/carousel'

// TODO: use https://picsum.photos/
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

const Root = styled.div`
  & > * {
    max-width: 980px;
    max-height: 460px;
  }
`

render(
  <Root>
    <Carousel images={httpCats} interval={1337} />
    <Hr />
  </Root>,
  document.querySelector('#root'),
)
