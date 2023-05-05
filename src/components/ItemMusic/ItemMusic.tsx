import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Spoticon from '~/components/Spoticon/Spoticon'
import { PlayerActions } from '~/store/ducks/player'
import { Container } from './styles'

type ItemMusicProps = {}

function ItemMusic({ music, onPlay, index, ...props }: ItemMusicProps) {
  const [isPlaying, setPlaying] = useState(false)
  const { currentSong, status } = useSelector(({ player }) => player)
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

  return (
    <Container className={isPlaying && 'playing'}>
      <td style={{ width: 40 }}>
        <div className="image">
          <img src={music.album.cover.downloadURL} />
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
