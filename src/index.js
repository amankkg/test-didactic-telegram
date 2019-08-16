import React from 'react'
import {render} from 'react-dom'
import {styled} from 'linaria/react'

import {Hr} from './atoms/hr'
import {Carousel} from './organisms/carousel'

const W = 1080
const H = 490

const images = [
  {
    url: `https://picsum.photos/id/400/${W}/${H}`,
    note: 'not a cat #1',
  },
  {
    url: `https://picsum.photos/id/401/${W}/${H}`,
    note: 'not a cat #2',
  },
  {
    url: `https://picsum.photos/id/403/${W}/${H}`,
    note: 'not a cat #3',
  },
  {
    url: `https://picsum.photos/id/404/${W}/${H}`,
    note: 'not a cat #4',
  },
]

const Root = styled.div`
  & > * {
    max-width: ${W}px;
    max-height: ${H}px;
  }
`

render(
  <Root>
    <Carousel images={images} interval={1337} />
    <Hr />
  </Root>,
  document.querySelector('#root'),
)
