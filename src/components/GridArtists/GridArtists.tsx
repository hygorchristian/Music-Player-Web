// @ts-nocheck

import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import ItemArtist from '~/components/ItemArtist'
import { useTabletMode, useWindowSize } from '~/hooks/index'
import { getItemsPerRow, getItemWidth } from '~/utils/dev'

type GridArtistsProps = {

}

function GridArtists ({ data, ...props }: GridArtistsProps) {
  const { width } = useWindowSize()
  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow(width))

  useEffect(() => {
    setItemsPerRow(getItemsPerRow(width))
  }, [width])

  return (
    <Container itemsPerRow={itemsPerRow} >
      {data.map(item => (
        <ItemArtist key={item.id} data={item} />
      ))}
    </Container>
  )
}

export default GridArtists
