/* eslint-disable indent */

import React, { memo, useState } from 'react'

import { useParams } from 'react-router-dom'
import Header from '~/components/Header'

import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '~/components/SearchBar'
import Table from '~/components/Table'
import { secondsToHours } from '~/utils/time'
import { Container } from './styles'

import { useQuery } from 'react-query'
import MenuCreator from '~/components/MenuCreator'
import MenuPlaylist from '~/components/MenuPlaylist'
import Spoticon from '~/components/Spoticon/Spoticon'
import api from '~/services/api'
import { PlayerActions, playerStatus } from '~/store/ducks/player'

type AlbumDetailProps = {}

function AlbumDetail(props: AlbumDetailProps) {
  const dispatch = useDispatch()

  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })
  const [creatorMenuOpen, setCreatorMenuOpen] = useState(false)
  const [creatorMenuPos, setCreatorMenuPos] = useState({ top: 0, left: 0 })

  const { id } = useParams()

  const { data: album, isLoading } = useQuery('album', () => api.getAlbum(id))

  const { headerFixed } = useSelector(({ app }) => app)
  const { currentAlbum, status } = useSelector(({ player }) => player)

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
      // eslint-disable-next-line
      top: e.clientY,
    }
    setPlaylistMenuOpen(true)
    setPlaylistMenuPos(pos)
  }

  const handleAlbumPlay = () => {
    if (currentAlbum === album.id) {
      dispatch(PlayerActions.play())
    } else {
      dispatch(
        PlayerActions.load(album.musics[0], album.musics, null, album.id)
      )
    }
  }

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }

  if (isLoading || !album) {
    return null
  }

  return (
    <>
      <Container onContextMenu={(e) => e.preventDefault()}>
        <Header height={308}>
          <div className="head">
            <div className="cover" onContextMenu={openPlaylistMenu}>
              <img src={album.cover && album.cover.downloadURL} />
              <div className="overlay">
                <Spoticon name="edit" size={60} color="white" />
              </div>
            </div>
            <div className="info">
              <div className="label">Album</div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>
                {album.name}
              </h2>
              <p className="text">
                {album.year} • {album.musics.length}{' '}
                {album.musics.length > 1 ? 'songs' : 'song'},{' '}
                {secondsToHours(album.album_duration)}
              </p>
              <div className="controls">
                {currentAlbum === album.id &&
                status === playerStatus.PLAYING ? (
                  <button className="play" onClick={handlePause}>
                    <span>Pause</span>
                  </button>
                ) : (
                  <button className="play" onClick={handleAlbumPlay}>
                    <span>Play</span>
                  </button>
                )}
                <button className="options" onClick={openPlaylistMenu}>
                  <Spoticon name="heart-solid" size={16} color="white" />
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
                <img src={album.cover && album.cover.downloadURL} />
              </div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>
                {album.name}
              </h2>
            </div>
            <div className="controls">
              {currentAlbum === album.id && status === playerStatus.PLAYING ? (
                <button className="play" onClick={handlePause}>
                  <span>Pause</span>
                </button>
              ) : (
                <button className="play" onClick={handleAlbumPlay}>
                  <span>Play</span>
                </button>
              )}
              <button className="options" onClick={openPlaylistMenu}>
                <Spoticon name="dots-h" size={24} />
              </button>
              <button className="options" onClick={openPlaylistMenu}>
                <Spoticon name="heart-solid" size={14} color="white" />
              </button>
            </div>
          </div>
        </Header>
        {headerFixed && <div className="extra-size" />}
        <SearchBar />
        <Table musics={album.musics} />
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

export default memo(AlbumDetail)
