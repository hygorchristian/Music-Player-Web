import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import Spoticon from '~/components/Spoticon/Spoticon'
import { useAppSelector } from '~/store'
import { PlayerActions, playerStatus } from '~/store/ducks/player'
import { Music } from '~/types/Data'
import { Container } from './styles'

type ItemMusicProps = {
  music: Music
  onPlay: (music: Music) => void
  index: number
}

function ItemMusic({ music, onPlay, index }: ItemMusicProps) {
  const [isPlaying, setPlaying] = useState(false)
  const { currentSong, status } = useAppSelector(({ player }) => player)
  const dispatch = useDispatch()

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }

  useEffect(() => {
    setPlaying(
      currentSong &&
        currentSong.id === music.id &&
        status === playerStatus.PLAYING
    )
  }, [status, currentSong, music])

  if (!music) return null

  return (
    <Container className={isPlaying ? 'playing' : ''}>
      <td style={{ width: 40 }}>
        <div className="image">
          <img src={music?.album?.cover_image} />
        </div>
      </td>
      <td style={{ width: 44 }}>
        <div className="button-container">
          {isPlaying ? (
            <button className="play" onClick={handlePause}>
              <Spoticon name="pause" size={12} color="white" />
            </button>
          ) : (
            <button className="play" onClick={() => onPlay(music)}>
              <Spoticon name="play" size={12} color="white" />
            </button>
          )}

          <span className="index">{index}</span>
        </div>
      </td>
      <td style={{ width: 50 }}>
        <div className="fav">
          <Spoticon name="heart" size={16} color="white" />
        </div>
      </td>
      <td className="text">
        <span>{music.name}</span>
      </td>
      <td style={{ width: 34 }}>
        <button>
          <Spoticon name="dots-h" size={14} color="white" />
        </button>
      </td>
      <td className="text" style={{ width: 130 }}>
        <span>370,747,752</span>
      </td>
    </Container>
  )
}

export default ItemMusic
