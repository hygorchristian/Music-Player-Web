import React, { useEffect, useState } from 'react'

import ItemAlbum from '~/components/ItemAlbum'
import { useWindowSize } from '~/hooks'
import { Album } from '~/types/Data'
import { getItemsPerRow } from '~/utils/dev'
import { Container } from './styles'
type GridItemsProps = {
  albums: Album[]
}

function GridItems({ albums, ...props }: GridItemsProps) {
  const { width } = useWindowSize()
  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow(width))

  useEffect(() => {
    setItemsPerRow(getItemsPerRow(width))
  }, [width])

  return (
    <Container itemsPerRow={itemsPerRow}>
      {albums.map((item) => (
        <ItemAlbum key={item.id} album={item} />
      ))}
    </Container>
  )
}

export default GridItems
