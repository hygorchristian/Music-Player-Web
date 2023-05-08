import React, { memo, MouseEventHandler, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '~/components/Headers'

import { useDispatch } from 'react-redux'
import SearchBar from '~/components/SearchBar'
import Table from '~/components/Table'
import { secondsToHours } from '~/utils/time'
import { Container } from './styles'

import { useQuery } from 'react-query'
import MenuCreator from '~/components/MenuCreator'
import MenuPlaylist from '~/components/MenuPlaylist'
import Spoticon from '~/components/Spoticon/Spoticon'
import api from '~/services/api'
import { useAppSelector } from '~/store'
import { PlayerActions, playerStatus } from '~/store/ducks/player'

function Playlist() {
  const dispatch = useDispatch()
  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })
  const [creatorMenuOpen, setCreatorMenuOpen] = useState(false)
  const [creatorMenuPos, setCreatorMenuPos] = useState({ top: 0, left: 0 })

  const { headerFixed } = useAppSelector(({ app }) => app)
  const { currentPlaylist, status } = useAppSelector(({ player }) => player)

  const { id } = useParams<{ id: string }>()
  const { data: playlist, isLoading } = useQuery(['playlist', id], () =>
    api.getPlaylist(id)
  )

  const handleContextMenu: MouseEventHandler = (e) => {
    e.preventDefault()
  }

  const handleClickAway: MouseEventHandler = (e) => {
    setPlaylistMenuOpen(false)
    setCreatorMenuOpen(false)
  }

  const openPlaylistMenu: MouseEventHandler = (e) => {
    setPlaylistMenuOpen(true)
    setPlaylistMenuPos({
      left: e.clientX,
      top: e.clientY,
    })
  }

  const openCreatorMenu: MouseEventHandler = (e) => {
    setCreatorMenuOpen(true)
    setCreatorMenuPos({
      left: e.clientX,
      top: e.clientY,
    })
  }

  const handlePlaylistPlay = () => {
    if (!playlist) return

    if (currentPlaylist === playlist.id) {
      dispatch(PlayerActions.play())
    } else {
      dispatch(
        PlayerActions.load(playlist.musics[0], playlist.musics, playlist.id)
      )
    }
  }

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }

  if (isLoading || !playlist) return null

  return (
    <>
      <Container onContextMenu={(e: any) => e.preventDefault()}>
        <Header height={308}>
          <div className="head">
            <div className="cover" onContextMenu={openPlaylistMenu}>
              <img src={playlist.playlist_image} />
              <div className="overlay">
                <Spoticon name="edit" size={60} color="white" />
              </div>
            </div>
            <div className="info">
              <div className="label">Playlist</div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>
                {playlist.name}
              </h2>
              <p className="text">
                Created by{' '}
                <a onContextMenu={openCreatorMenu}>{playlist.creator}</a> •{' '}
                {playlist.musics.length}{' '}
                {playlist.musics.length > 1 ? 'songs' : 'song'},{' '}
                {secondsToHours(playlist.playlist_duration)}
              </p>
              <div className="controls">
                {currentPlaylist === playlist.id &&
                status === playerStatus.PLAYING ? (
                  <button className="play" onClick={handlePause}>
                    <span>Pause</span>
                  </button>
                ) : (
                  <button className="play" onClick={handlePlaylistPlay}>
                    <span>Play</span>
                  </button>
                )}
                <button className="options" onClick={openPlaylistMenu}>
                  <Spoticon name="dots-h" size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="subhead">
            <div className="info">
              <div className="cover">
                <img src={playlist.playlist_image} />
              </div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>
                {playlist.name}
              </h2>
            </div>
            <div className="controls">
              {currentPlaylist === playlist.id &&
              status === playerStatus.PLAYING ? (
                <button className="play" onClick={handlePause}>
                  <span>Pause</span>
                </button>
              ) : (
                <button className="play" onClick={handlePlaylistPlay}>
                  <span>Play</span>
                </button>
              )}
              <button className="options" onClick={openPlaylistMenu}>
                <Spoticon name="dots-h" size={24} />
              </button>
            </div>
          </div>
        </Header>
        {headerFixed && <div className="extra-size" />}
        <SearchBar />
        <Table musics={playlist.musics} />
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

export default memo(Playlist)
