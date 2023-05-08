import React, { MouseEventHandler, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import MenuAlbum from '~/components/MenuAlbum'
import Spoticon from '~/components/Spoticon/Spoticon'
import { useWindowSize } from '~/hooks'
import { Artist } from '~/types/Data'
import { getItemWidth } from '~/utils/dev'
import { Container } from './styles'

type ItemArtistProps = {
  data: Artist
}

function ItemArtist({ data }: ItemArtistProps) {
  const { width } = useWindowSize()
  const history = useHistory()

  const [itemSize, setItemSize] = useState(getItemWidth(width))
  const [albumMenuOpen, setAlbumMenuOpen] = useState(false)
  const [albumMenuPos, setAlbumMenuPos] = useState({ top: 0, left: 0 })

  const handleDetails = () => {
    history.push(`/artist/${data.id}`)
  }

  const handleContextMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
  }

  const handleClickAway = () => {
    setAlbumMenuOpen(false)
  }

  const openAlbumMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
    }
    setAlbumMenuOpen(true)
    setAlbumMenuPos(pos)
  }

  useEffect(() => {
    setItemSize(getItemWidth(width))
  }, [width])

  return (
    <>
      <Container width={itemSize}>
        <div className="image">
          <img src={data.artist_image} />

          <div
            className="overlay"
            onClick={handleDetails}
            onContextMenu={openAlbumMenu}
          >
            <button>
              <Spoticon name="heart-solid" size={18} color="white" />
            </button>
            <button className="big">
              <Spoticon name="play" size={22} color="white" />
            </button>
            <button>
              <Spoticon name="dots-h" size={20} color="white" />
            </button>
          </div>
        </div>
        <div className="info">
          <h4 onClick={handleDetails} onContextMenu={openAlbumMenu}>
            {data.name}
          </h4>
        </div>
      </Container>
      <MenuAlbum
        open={albumMenuOpen}
        position={albumMenuPos}
        onClickAway={handleClickAway}
        onContext={(e: any) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
    </>
  )
}

export default ItemArtist
