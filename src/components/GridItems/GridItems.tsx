// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react'

import { Container } from './styles'
import ItemAlbum from '~/components/ItemAlbum'
import { useTabletMode, useWindowSize } from '~/hooks'
import { getItemsPerRow, getItemWidth } from '~/utils/dev'

type GridItemsProps = {

}

function GridItems ({ data, ...props }: GridItemsProps) {
  const { width } = useWindowSize()
  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow(width))

  useEffect(() => {
    setItemsPerRow(getItemsPerRow(width))
  }, [width])

  return (
    <Container itemsPerRow={itemsPerRow} >
      {data.map(item => (
        <ItemAlbum key={item.id} data={item} />
      ))}
    </Container>
  )
}

export default GridItems
