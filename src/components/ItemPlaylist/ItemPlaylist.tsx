// @ts-nocheck

import React, { useEffect, useState } from 'react'
import Player from 'react-sound'

import { Container } from './styles'
import Spoticon from '~/components/Spoticon/Spoticon'
import { useDispatch, useSelector } from 'react-redux'
import { PlayerActions } from '~/store/ducks/player'
import { getAlbum, getArtist } from '~/services/firebase'

type ItemPlaylistProps = {

}

function ItemPlaylist ({ music, onPlay }: ItemPlaylistProps) {
  const [fav, setFav] = useState(false)
  const [artist, setArtist] = useState(null)
  const [album, setAlbum] = useState(null)
  const { currentSong, status } = useSelector(({ player }) => player)
  const dispatch = useDispatch()

  const pause = () => {
    dispatch(PlayerActions.pause())
  }

  useEffect(() => {
    getAlbum(music.album_id, _album => {
      setAlbum(_album)

      getArtist(_album.artist_id, _artist => {
        setArtist(_artist)
      })
    })
  })

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
        <a href={artist && `/artist/${artist.id}`} className="artist">{artist && artist.name}</a>
      </td>
      <td className="text">
        <a href={album && `/album/${album.id}`} className="album">{album && album.name}</a>
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
