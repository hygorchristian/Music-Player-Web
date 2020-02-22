// @ts-nocheck

import React, { useState } from 'react'

import { Container } from './styles'
import Spoticon from '~/components/Spoticon/Spoticon'
import { useDispatch, useSelector } from 'react-redux'
import { PlayerActions } from '~/store/ducks/player'
import Player from 'react-sound'

type ItemPlaylistProps = {

}

function ItemPlaylist ({ music, onPlay }: ItemPlaylistProps) {
  const [fav, setFav] = useState(false)
  const { currentSong, status } = useSelector(({ player }) => player)
  const dispatch = useDispatch()

  const pause = () => {
    dispatch(PlayerActions.pause())
  }

  return (
    <Container key={music.id} className={currentSong && currentSong.id === music.id && 'playing'}>
      <td className="button" align="center">
        {currentSong && currentSong.id === music.id && status === Player.status.PLAYING ? (
          <button className="control-button outlined" onClick={() => pause()}>
            <Spoticon name="pause" color="#ffffff" size={14} />
          </button>
        ) : (
          <button className="control-button outlined hide" onClick={() => onPlay(music)}>
            <Spoticon name="play" color="#ffffff" size={14} />
          </button>
        )}

      </td>
      <td className="button" align="center" onClick={() => setFav(!fav)}>
        {fav ? (
          <Spoticon name="heart-solid" color="#ffffff" size={16} style={{ lineHeight: '40px' }} />
        ) : (
          <Spoticon name="heart" color="#ffffff" size={16} style={{ lineHeight: '40px' }} />
        )}
      </td>
      <td className="text">
        <span className="title">{music.name}</span>
      </td>
      <td className="text">
        <span className="artist">Elton John</span>
      </td>
      <td className="text">
        <span className="album">Ice On Fire</span>
      </td>
      <td className="text" align="right">
        <span className="date">2019-09-24</span>
      </td>
      <td className="button" align="center">
        <button className="control-button">
          <Spoticon name="dots-h" color="#ffffff" size={24} />
        </button>
      </td>
      <td className="text" align="right">
        <span className="time">{music.duration}</span>
      </td>
    </Container>
  )
}

export default ItemPlaylist
