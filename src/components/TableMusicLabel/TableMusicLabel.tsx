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
  const [rest, setRest] = useState(0)
  const [musicsShown, setMusicsShown] = useState([])
  const dispatch = useDispatch()

  const setSplited = () => {
    if (!musics) return

    const split = musics.slice(0, 5)
    setMusicsShown(split)
    setRest(musics.length - 5)
  }

  const playSong = (music) => {
    dispatch(PlayerActions.load(music, musics, null, null))
  }

  useEffect(() => {
    setSplited()
  }, [musics])

  if (!musics) return null
  if (musics.length === 0) return null

  return (
    <Container>
      <h2>{label}</h2>
      <table>
        <tbody>
          {musicsShown.map((music, i) => (
            <ItemMusic key={music.key} music={music} onPlay={playSong} index={i + 1} />
          ))}
        </tbody>
      </table>
      {rest > 0 && musics.length > musicsShown.length && (
        <button className="btn" onClick={() => {
          setMusicsShown(musics)
        }}>
          <span>Show {rest} more</span>
        </button>
      )}
      {musicsShown.length > 5 && rest > 0 && (
        <button className="btn" onClick={setSplited}>
          <span>Show only 5 songs</span>
        </button>
      )}

    </Container>
  )
}

export default TableMusicLabel
