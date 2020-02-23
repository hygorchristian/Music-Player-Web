// @ts-nocheck

import React from 'react'

import { Container } from './styles'
import Spoticon from '~/components/Spoticon/Spoticon'

type ItemMusicProps = {

}

function ItemMusic ({ music, ...props }: ItemMusicProps) {
  return (
    <Container>
      <td className="image">
        <img src={music.album.cover.downloadURL} />
      </td>
      <td style={{ width: 44 }}>
        <div className="button-container">
          play, index
        </div>
      </td>
      <td style={{ width: 50 }}>
        <Spoticon name="heart" size={14} color="white" />
      </td>
      <td>
        <span>{music.name}</span>
      </td>
      <td style={{ width: 34 }}>
        <button>
          <Spoticon name="dots-h" size={14} color="white" />
        </button>
      </td>
      <td style={{ width: 130 }}>
        <span>370,747,752</span>
      </td>
    </Container>
  )
}

export default ItemMusic
