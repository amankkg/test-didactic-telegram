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
    note: 'plant',
  },
  {
    url: `https://picsum.photos/id/409/${W}/${H}`,
    note: 'town',
  },
  {
    url: `https://picsum.photos/id/403/${W}/${H}`,
    note: 'retro',
  },
  {
    url: `https://picsum.photos/id/404/${W}/${H}`,
    note: 'cliff',
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
    <Carousel images={images} interval={2500} />
    <Hr />
  </Root>,
  document.querySelector('#root'),
)
