import React, { memo, useEffect, useRef, useState } from 'react'

import Spoticon from '~/components/Spoticon/Spoticon'
import { useTabletMode, useWindowSize } from '~/hooks'
import { getItemWidth } from '~/utils/dev'
import { Carousel, Container } from './styles'

type HorizontalScrollProps = {
  title: String
  data: Array<Object>
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function HorizontalScroll({ title, data }: HorizontalScrollProps) {
  const { width } = useWindowSize()
  const { isTablet } = useTabletMode()
  const [itemSize, setItemSize] = useState(getItemWidth(width))
  const [containerWidth, setContainerWidth] = useState(
    isTablet ? width - 200 : width - 456
  )
  const carousel = useRef(null)

  const onNext = () => {
    // @ts-expect-error
    carousel?.current?.next()
  }

  const onPrev = () => {
    // @ts-expect-errors
    carousel?.current?.previous()
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
            <Spoticon name="chevron-left-solid" color="white" size={18} />
            {/* <ReactSVG src="/icons/spotify/chevron-left.svg" /> */}
          </button>
          <button onClick={onNext}>
            <Spoticon name="chevron-right-solid" color="white" size={18} />
            {/* <ReactSVG src="/icons/spotify/chevron-right.svg" /> */}
          </button>
        </div>
      </div>
      <Carousel ref={carousel} itemSize={itemSize}>
        {items.map((item) => (
          <div className="item" key={item}>
            <img />
            <h4>This Is Freddie Mercury</h4>
            <p>The essential Freddie Mercury all in one place</p>
            <span className="count">118,587 FOLLOWERS</span>
          </div>
        ))}
      </Carousel>
    </Container>
  )
}

export default memo(HorizontalScroll)
