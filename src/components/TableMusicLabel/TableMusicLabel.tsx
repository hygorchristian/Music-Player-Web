// @ts-nocheck

import React, { useState, useRef, useEffect } from 'react'

import { Container } from './styles'
import Spoticon from '~/components/Spoticon'
import ItemMusic from '~/components/ItemMusic'
import { useDispatch, useSelector } from 'react-redux'
import { PlayerActions } from '~/store/ducks/player'

type TableMusicLabelProps = {

}

function TableMusicLabel ({ label, musics, ...props }: TableMusicLabelProps) {
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

  if (!musics) return null
  if (musics.length === 0) return null

  return (
    <Container>
      <h2>{label}</h2>
      <table>
        <tbody>
          {musics.map(music => (
            <ItemMusic key={music.key} music={music} onPlay={handlePlay} />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TableMusicLabel
