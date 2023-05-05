// @ts-nocheck

import React, { memo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '~/components/Header'

import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '~/components/SearchBar'
import Table from '~/components/Table'
import { secondsToHours } from '~/utils/time'
import { Container } from './styles'

import MenuCreator from '~/components/MenuCreator'
import MenuPlaylist from '~/components/MenuPlaylist'
import Spoticon from '~/components/Spoticon/Spoticon'
import { PlayerActions } from '~/store/ducks/player'

type HomeProps = {}

function Playlist(props: HomeProps) {
  const dispatch = useDispatch()
  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })
  const [creatorMenuOpen, setCreatorMenuOpen] = useState(false)
  const [creatorMenuPos, setCreatorMenuPos] = useState({ top: 0, left: 0 })

  const { headerFixed } = useSelector(({ app }) => app)
  const { currentPlaylist, status } = useSelector(({ player }) => player)
  const [playlist, setPlaylist] = useState(null)
  const { id } = useParams()

  const handleContextMenu = (e) => {
    e.preventDefault()
  }

  const handleClickAway = (e) => {
    setPlaylistMenuOpen(false)
    setCreatorMenuOpen(false)
  }

  const openPlaylistMenu = (e) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
    }
    setPlaylistMenuOpen(true)
    setPlaylistMenuPos(pos)
  }

  const openCreatorMenu = (e) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
    }
    setCreatorMenuOpen(true)
    setCreatorMenuPos(pos)
  }

  const handlePlaylistPlay = () => {
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

  if (!playlist) {
    return null
  }

  return (
    <>
      <Container onContextMenu={(e) => e.preventDefault()}>
        <Header height={308}>
          <div className="head">
            <div className="cover" onContextMenu={openPlaylistMenu}>
              <img src={playlist.cover.downloadURL} />
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
                {secondsToHours(playlist.playlistDuration)}
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
                <img src={playlist.cover.downloadURL} />
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

export default memo(Playlist)
