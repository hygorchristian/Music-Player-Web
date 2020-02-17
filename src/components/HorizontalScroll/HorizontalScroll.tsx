// @ts-nocheck

import React, { useState, useEffect } from 'react'

import { Container, Carousel } from './styles'
import { ReactSVG } from 'react-svg'
import { useWindowSize } from '~/hooks'

type HorizontalScrollProps = {
  title: String,
  data: Array<Object>
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function getItemWidth (width: Number) {
  if (width >= 1740) {
    return ((width - 520 - (24 * 5)) / 6)
  }
  if (width < 1740 && width >= 1280) {
    return ((width - 520 - (24 * 3)) / 4)
  }
  if (width < 1280 && width >= 1190) {
    return ((width - 520 - (24 * 2)) / 3)
  }
  if (width < 1190 && width >= 1020) {
    return ((width - 264 - (24 * 3)) / 4)
  }
  if (width < 1020 && width >= 800) {
    return ((width - 264 - (24 * 2)) / 3)
  }

  return 162
}

function HorizontalScroll ({ title, data }: HorizontalScrollProps) {
  const { width } = useWindowSize()
  const [itemSize, setItemSize] = useState(getItemWidth(width))

  useEffect(() => {
    setItemSize(getItemWidth(width))
  }, [width])

  return (
    <Container>
      <div className="header">
        <h2>{title}</h2>
        <div className="controls">
          <button>
            <ReactSVG src="/icons/spotify/chevron-left.svg" />
          </button>
          <button>
            <ReactSVG src="/icons/spotify/chevron-right.svg" />
          </button>
        </div>
      </div>
      <Carousel itemSize={itemSize}>
        {items.map(item => (
          <div className="item">
            <img/>
            <h4>This Is Freddie Mercury</h4>
            <p>The essential Freddie Mercury all in one place</p>
            <span className="count">118,587 FOLLOWERS</span>
          </div>
        ))}
      </Carousel>
    </Container>
  )
}

export default HorizontalScroll
