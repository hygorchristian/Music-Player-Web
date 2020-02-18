// @ts-nocheck

import React, { useState, useEffect, useRef } from 'react'

import { Container, Carousel } from './styles'
import { ReactSVG } from 'react-svg'
import { useTabletMode, useWindowSize } from '~/hooks'

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
  const { isTablet } = useTabletMode()
  const [itemSize, setItemSize] = useState(getItemWidth(width))
  const [containerWidth, setContainerWidth] = useState(isTablet ? width - 200 : width - 456)
  const carousel = useRef(null)

  const onNext = () => {
    carousel.current.next()
  }

  const onPrev = () => {
    carousel.current.previous()
  }

  useEffect(() => {
    setItemSize(getItemWidth(width))
    setContainerWidth(isTablet ? width - 200 : width - 456)
  }, [width])

  return (
    <Container width={containerWidth}>
      <div className="header">
        <h2>{title}</h2>
        <div className="controls">
          <button onClick={onPrev}>
            <ReactSVG src="/icons/spotify/chevron-left.svg" />
          </button>
          <button onClick={onNext}>
            <ReactSVG src="/icons/spotify/chevron-right.svg" />
          </button>
        </div>
      </div>
      <Carousel ref={carousel} itemSize={itemSize}>
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
