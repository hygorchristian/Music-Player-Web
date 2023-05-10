import React, { useEffect, useRef, useState } from 'react'

import { useDispatch } from 'react-redux'
import ItemPlaylist from '~/components/ItemPlaylist'
import Spoticon from '~/components/Spoticon'
import { useAppSelector } from '~/store'
import { PlayerActions } from '~/store/ducks/player'
import { Music } from '~/types/Data'
import { Container } from './styles'

type TableProps = {
  musics: Music[]
}

function Table({ musics }: TableProps) {
  const [fav, setFav] = useState(false)
  const [top, setTop] = useState(0)
  const { scrollTop } = useAppSelector(({ app }) => app)
  const { currentSong } = useAppSelector(({ player }) => player)
  const table = useRef(null)
  const dispatch = useDispatch()

  const handlePlay = (music: Music) => {
    if (currentSong && currentSong.id === music.id) {
      dispatch(PlayerActions.play())
    } else {
      dispatch(PlayerActions.load(music, musics))
    }
  }

  useEffect(() => {
    const _top =
      // @ts-expect-error
      (table.current && table.current.getBoundingClientRect().top) ?? 0
    setTop(_top)
  }, [scrollTop])

  return (
    <Container>
      <table id={top <= 116 ? 'fixed' : 'hidden'}>
        <thead id="playlist-table-head">
          <tr>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 44 }}></th>
            <th style={{ width: 300 }}>Title</th>
            <th style={{ width: 300 }}>Artist</th>
            <th style={{ width: 160 }}>Album</th>
            <th style={{ width: 150 }}>
              <Spoticon name="calendar" size={16} />
            </th>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 60 }}>
              <Spoticon name="clock" size={16} />
            </th>
          </tr>
        </thead>
      </table>
      <table id="playlist-table" ref={table}>
        <thead>
          <tr>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 44 }}></th>
            <th style={{ width: 300 }}>Title</th>
            <th style={{ width: 300 }}>Artist</th>
            <th style={{ width: 160 }}>Album</th>
            <th style={{ width: 150 }}>
              <Spoticon name="calendar" size={16} />
            </th>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 60 }}>
              <Spoticon name="clock" size={16} />
            </th>
          </tr>
        </thead>
        <tbody>
          {(musics || []).map((music, index) => (
            <ItemPlaylist
              key={music.id}
              music={music}
              onPlay={handlePlay}
              index={index + 1}
            />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Table
