// @ts-nocheck

import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import ItemMusic from '~/components/ItemMusic'
import { PlayerActions } from '~/store/ducks/player'
import { Music } from '~/types/Data'
import { Container } from './styles'

type TableMusicLabelProps = {
  musics: Music[]
  label: string
}

function TableMusicLabel({ label, musics }: TableMusicLabelProps) {
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
            <ItemMusic
              key={music.id}
              music={music}
              onPlay={playSong}
              index={i + 1}
            />
          ))}
        </tbody>
      </table>
      {rest > 0 && musics.length > musicsShown.length && (
        <button
          className="btn"
          onClick={() => {
            setMusicsShown(musics)
          }}
        >
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
