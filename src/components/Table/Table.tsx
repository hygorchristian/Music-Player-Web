// @ts-nocheck

import React, { useState, useRef, useEffect } from 'react'

import { Container } from './styles'
import Spoticon from '~/components/Spoticon'
import ItemPlaylist from '~/components/ItemPlaylist'
import { useDispatch, useSelector } from 'react-redux'
import { PlayerActions } from '~/store/ducks/player'

type TableProps = {

}

function Table ({ musics }: TableProps) {
  const [fav, setFav] = useState(false)
  const [top, setTop] = useState(0)
  const { scrollTop } = useSelector(({ app }) => app)
  const { currentSong } = useSelector(({ player }) => player)
  const table = useRef(null)
  const dispatch = useDispatch()

  const handlePlay = (music) => {
    if (currentSong && currentSong.id === music.id) {
      dispatch(PlayerActions.play())
    } else {
      dispatch(PlayerActions.load(music, musics))
    }
  }

  useEffect(() => {
    const _top = table.current && table.current.getBoundingClientRect().top
    setTop(_top)
  }, [scrollTop])

  return (
    <Container>
      <table id={top <= 116 ? 'fixed' : 'hidden'}>
        <thead id="playlist-table-head">
          <tr>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 44 }}></th>
            <th>Title</th>
            <th style={{ width: 300 }}>Artist</th>
            <th style={{ width: 320 }}>Album</th>
            <th style={{ width: 110 }}>
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
            <th>Title</th>
            <th style={{ width: 300 }}>Artist</th>
            <th style={{ width: 320 }}>Album</th>
            <th style={{ width: 110 }}>
              <Spoticon name="calendar" size={16} />
            </th>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 60 }}>
              <Spoticon name="clock" size={16} />
            </th>
          </tr>
        </thead>
        <tbody>
          {musics.map(music => (
            <ItemPlaylist music={music} onPlay={handlePlay} />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Table
