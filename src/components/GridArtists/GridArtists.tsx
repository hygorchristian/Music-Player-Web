import React, { useEffect, useState } from 'react'

import ItemArtist from '~/components/ItemArtist'
import { useWindowSize } from '~/hooks/index'
import { Artist } from '~/types/Data'
import { getItemsPerRow } from '~/utils/dev'
import { Container } from './styles'

type GridArtistsProps = {
  data: Artist[]
}

function GridArtists({ data }: GridArtistsProps) {
  const { width } = useWindowSize()
  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow(width))

  useEffect(() => {
    setItemsPerRow(getItemsPerRow(width))
  }, [width])

  return (
    <Container itemsPerRow={itemsPerRow}>
      {data.map((item) => (
        <ItemArtist key={item.id} data={item} />
      ))}
    </Container>
  )
}

export default GridArtists
