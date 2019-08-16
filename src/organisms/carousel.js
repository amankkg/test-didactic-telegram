import React from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react'

const Root = styled.div`
  position: relative;
  margin: auto;
`

const PreviousSlideButton = styled.div`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-50%, -50%);
`

const NextSlideButton = styled.div`
  position: absolute;
  top: 50%;
  left: 93%;
  transform: translate(-50%, -50%);
`

const IndicatorFooter = styled.div`
  position: absolute;
  top: 93%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Carousel = ({images}) => (
  <Root>
    <img src="https://picsum.photos/980/460" alt="img" />
    <PreviousSlideButton>prev</PreviousSlideButton>
    <NextSlideButton>next</NextSlideButton>
    <IndicatorFooter>footer</IndicatorFooter>
  </Root>
)

export {Carousel}
