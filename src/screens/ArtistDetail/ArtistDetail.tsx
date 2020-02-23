// @ts-nocheck

import React, { useEffect, useState, memo } from 'react'
import Player from 'react-sound'

import { useParams } from 'react-router-dom'
import Header from '~/components/Header'
import { getArtistFilled } from '~/services/firebase'

import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import Table from '~/components/Table'
import SearchBar from '~/components/SearchBar'

import Spoticon from '~/components/Spoticon/Spoticon'
import MenuPlaylist from '~/components/MenuPlaylist'
import MenuCreator from '~/components/MenuCreator'
import TableMusicLabel from '~/components/TableMusicLabel'
import { PlayerActions } from '~/store/ducks/player'

type ArtistDetailProps = {

}

function ArtistDetail (props: ArtistDetailProps) {
  const dispatch = useDispatch()

  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })
  const [creatorMenuOpen, setCreatorMenuOpen] = useState(false)
  const [creatorMenuPos, setCreatorMenuPos] = useState({ top: 0, left: 0 })
  const [artist, setArtist] = useState([])

  const { headerFixed } = useSelector(({ app }) => app)
  const { currentArtist, status } = useSelector(({ player }) => player)

  const { id } = useParams()

  const handleContextMenu = (e) => {
    e.preventDefault()
  }

  const handleClickAway = e => {
    setPlaylistMenuOpen(false)
    setCreatorMenuOpen(false)
  }

  const openPlaylistMenu = (e) => {
    const pos = {
      left: e.clientX,
      top: e.clientY
    }
    setPlaylistMenuOpen(true)
    setPlaylistMenuPos(pos)
  }

  const openCreatorMenu = (e) => {
    const pos = {
      left: e.clientX,
      top: e.clientY
    }
    setCreatorMenuOpen(true)
    setCreatorMenuPos(pos)
  }

  const handleArtistPlay = () => {
    if (currentArtist === artist.id) {
      dispatch(PlayerActions.play())
    } else {
      dispatch(PlayerActions.load(artist.musics[0], artist.musics, null, artist.id))
    }
  }

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }

  useEffect(() => {
    setArtist(null)

    getArtistFilled(id, _artist => {
      setArtist(_artist)
    })
  }, [id])

  if (!artist) {
    return null
  }

  return (
    <>
      <Container onContextMenu={e => e.preventDefault()}>
        <Header height={308}>
          <div className="head">
            <div className="cover" onContextMenu={openPlaylistMenu}>
              <img src={artist.picture && artist.picture.downloadURL} />
              <div className="overlay">
                <Spoticon name="edit" size={60} color="white" />
              </div>
            </div>
            <div className="info">
              <div className="label">
                <span>Artist</span>
                <div className="check">
                  <Spoticon name="check" size={12} color='white' />
                </div>
              </div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>{artist.name}</h2>
              <div className="controls">
                {currentArtist === artist.id && status === Player.status.PLAYING ? (
                  <button className="play" onClick={handlePause}>
                    <span>Pause</span>
                  </button>
                ) : (
                  <button className="play" onClick={handleArtistPlay}>
                    <span>Play</span>
                  </button>
                )}
                <button className="btn">
                  <span>Follow</span>
                </button>
                <button className="options" onClick={openPlaylistMenu}>
                  <Spoticon name="dots-h" size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="subhead">
            <div className="info">
              <div className="cover">
                <img src={artist.picture && artist.picture.downloadURL} />
              </div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>{artist.name}</h2>
            </div>
            <div className="controls">
              {currentArtist === artist.id && status === Player.status.PLAYING ? (
                <button className="play" onClick={handlePause}>
                  <span>Pause</span>
                </button>
              ) : (
                <button className="play" onClick={handleArtistPlay}>
                  <span>Play</span>
                </button>
              )}
              <button className="btn">
                <span>Follow</span>
              </button>
              <button className="options" onClick={openPlaylistMenu}>
                <Spoticon name="dots-h" size={24} />
              </button>
            </div>
          </div>
        </Header>
        {headerFixed && <div className="extra-size" />}
        <SearchBar />
        <TableMusicLabel label="Popular" musics={artist.populars} />
        <div className="size" style={{ height: '300vh' }}>ss</div>
      </Container>
      <MenuPlaylist
        open={playlistMenuOpen}
        position={playlistMenuPos}
        onClickAway={handleClickAway}
        onContext={(e) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
      <MenuCreator
        open={creatorMenuOpen}
        position={creatorMenuPos}
        onClickAway={handleClickAway}
        onContext={(e) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
    </>
  )
}

export default memo(ArtistDetail)
