import React, { memo, useState } from 'react'

import { useParams } from 'react-router-dom'
import Header from '~/components/Headers'

import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import GridItems from '~/components/GridItems'
import MenuCreator from '~/components/MenuCreator'
import MenuPlaylist from '~/components/MenuPlaylist'
import SearchBar from '~/components/SearchBar'
import Spoticon from '~/components/Spoticon/Spoticon'
import TableMusicLabel from '~/components/TableMusicLabel'
import api from '~/services/api'
import { useAppSelector } from '~/store'
import { Container } from './styles'

import { PlayerActions, playerStatus } from '~/store/ducks/player'

function ArtistDetail() {
  const dispatch = useDispatch()

  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })
  const [creatorMenuOpen, setCreatorMenuOpen] = useState(false)
  const [creatorMenuPos, setCreatorMenuPos] = useState({ top: 0, left: 0 })

  const { headerFixed } = useAppSelector(({ app }) => app)
  const { currentArtistId: currentArtist, status } = useAppSelector(
    ({ player }) => player
  )

  const { id } = useParams<{ id: string }>()
  const { data: artist, isLoading } = useQuery(['artist', id], () =>
    api.getArtist(id)
  )

  const handleContextMenu = (e: any) => {
    e.preventDefault()
  }

  const handleClickAway = (e: any) => {
    setPlaylistMenuOpen(false)
    setCreatorMenuOpen(false)
  }

  const openPlaylistMenu = (e: any) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
    }
    setPlaylistMenuOpen(true)
    setPlaylistMenuPos(pos)
  }

  const openCreatorMenu = (e: any) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
    }
    setCreatorMenuOpen(true)
    setCreatorMenuPos(pos)
  }

  const handleArtistPlay = () => {
    if (!artist) return
    if (currentArtist === artist.id) {
      dispatch(PlayerActions.play())
    } else if (artist?.populars?.length) {
      dispatch(
        PlayerActions.load(
          artist?.populars?.[0],
          artist.populars,
          null,
          artist.id
        )
      )
    }
  }

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }

  if (!artist || isLoading) {
    return null
  }

  return (
    <>
      <Container onContextMenu={(e: any) => e.preventDefault()}>
        <Header height={308}>
          <div className="head">
            <div className="cover" onContextMenu={openPlaylistMenu}>
              <img src={artist.artist_image} />
              <div className="overlay">
                <Spoticon name="edit" size={60} color="white" />
              </div>
            </div>
            <div className="info">
              <div className="label">
                <span>Artist</span>
                <div className="check">
                  <Spoticon name="check" size={12} color="white" />
                </div>
              </div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>
                {artist.name}
              </h2>
              <div className="controls">
                {currentArtist === artist.id &&
                status === playerStatus.PLAYING ? (
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
                <img src={artist.artist_image} />
              </div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>
                {artist.name}
              </h2>
            </div>
            <div className="controls">
              {currentArtist === artist.id &&
              status === playerStatus.PLAYING ? (
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
        <TableMusicLabel label="Popular" musics={artist.populars || []} />
        <div className="title-section">
          <h2>Albums</h2>
        </div>
        <GridItems albums={artist.albums || []} />
      </Container>
      <MenuPlaylist
        open={playlistMenuOpen}
        position={playlistMenuPos}
        onClickAway={handleClickAway}
        onContext={(e: any) => {
          handleContextMenu(e)
          handleClickAway(e)
        }}
      />
      <MenuCreator
        open={creatorMenuOpen}
        position={creatorMenuPos}
        onClickAway={handleClickAway}
        onContext={(e: any) => {
          handleContextMenu(e)
          handleClickAway(e)
        }}
      />
    </>
  )
}

export default memo(ArtistDetail)
