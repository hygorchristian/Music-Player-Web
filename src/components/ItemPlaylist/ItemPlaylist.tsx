import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import Spoticon from '~/components/Spoticon/Spoticon'
import { useAppSelector } from '~/store'
import { PlayerActions, playerStatus } from '~/store/ducks/player'
import { Music } from '~/types/Data'
import { secondsToMin } from '~/utils/time'
import { Container } from './styles'

type ItemPlaylistProps = {
  music: Music
  onPlay: (music: Music) => void
  index: number
}

function ItemPlaylist({ music, onPlay, index }: ItemPlaylistProps) {
  const [fav, setFav] = useState(false)
  const { currentSong, status } = useAppSelector(({ player }) => player)
  const dispatch = useDispatch()
  const history = useHistory()

  const pause = () => {
    dispatch(PlayerActions.pause())
  }

  const album = music?.album
  const artist = album?.artist

  return (
    <Container
      key={music.id}
      className={clsx({ playing: currentSong?.id === music.id })}
    >
      <td className="button" align="center">
        {currentSong &&
        currentSong.id === music.id &&
        status === playerStatus.PLAYING ? (
          <button className="control-button outlined" onClick={() => pause()}>
            <Spoticon name="pause" color="#ffffff" size={14} />
          </button>
        ) : (
          <button
            className="control-button outlined hide"
            onClick={() => onPlay(music)}
          >
            <Spoticon name="play" color="#ffffff" size={14} />
          </button>
        )}
      </td>
      <td className="button" align="center" onClick={() => setFav(!fav)}>
        {fav ? (
          <Spoticon
            name="heart-solid"
            color="#ffffff"
            size={16}
            style={{ lineHeight: '40px' }}
          />
        ) : (
          <Spoticon
            name="heart"
            color="#ffffff"
            size={16}
            style={{ lineHeight: '40px' }}
          />
        )}
      </td>
      <td className="text">
        <span className="number">{index}</span>
      </td>
      <td className="text">
        <span className="title">{music.name}</span>
      </td>
      <td className="text">
        <a
          onClick={() => artist && history.push(`/artist/${artist.id}`)}
          className="artist"
        >
          {artist && artist.name}
        </a>
      </td>
      <td className="text">
        <a
          onClick={() => album && history.push(`/album/${album.id}`)}
          className="album"
        >
          {album && album.name}
        </a>
      </td>
      <td className="text" align="left">
        <span className="date">2019-09-24</span>
      </td>
      <td className="button" align="center">
        <button className="control-button">
          <Spoticon name="dots-h" color="#ffffff" size={24} />
        </button>
      </td>
      <td className="text" align="right">
        <span className="time">{secondsToMin(music.duration)}</span>
      </td>
    </Container>
  )
}

export default ItemPlaylist
