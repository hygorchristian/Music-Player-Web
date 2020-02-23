// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'
import { getItemWidth } from '~/utils/dev'
import { useTabletMode, useWindowSize } from '~/hooks'
import Spoticon from '~/components/Spoticon/Spoticon'
import MenuAlbum from '~/components/MenuAlbum'

type ItemAlbumProps = {

}

function ItemAlbum ({ data, ...props }: ItemAlbumProps) {
  const { width } = useWindowSize()
  const history = useHistory()

  const [itemSize, setItemSize] = useState(getItemWidth(width))
  const [albumMenuOpen, setAlbumMenuOpen] = useState(false)
  const [albumMenuPos, setAlbumMenuPos] = useState({ top: 0, left: 0 })

  const handleDetails = () => {
    history.push(`/album/${data.id}`)
  }

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault()
  }

  const handleClickAway = () => {
    setAlbumMenuOpen(false)
  }

  const openAlbumMenu = (e: HandleMenuInterface) => {
    const pos = {
      left: e.clientX,
      top: e.clientY
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
          <img src={data.cover.downloadURL}/>

          <div className="overlay" onClick={handleDetails} onContextMenu={openAlbumMenu}>
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
          <h4 onClick={handleDetails} onContextMenu={openAlbumMenu}>{data.name}</h4>
          <p onClick={() => history.push(`/artist/${data.artist.id}`)}>{data.artist.name}</p>
        </div>
      </Container>
      <MenuAlbum
        open={albumMenuOpen}
        position={albumMenuPos}
        onClickAway={handleClickAway}
        onContext={(e) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
    </>
  )
}

export default ItemAlbum
