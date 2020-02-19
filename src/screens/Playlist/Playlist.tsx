// @ts-nocheck

import React, { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import Header from '~/components/Header'
import { MoreHoriz, Edit } from '@material-ui/icons'

import { Container } from './styles'
import { useSelector } from 'react-redux'
import Table from '~/components/Table'
import SearchBar from '~/components/SearchBar'
import { usePlaylists } from '~/services/firebase'
import Spoticon from '~/components/Spoticon/Spoticon'
import MenuPlaylist from '~/components/MenuPlaylist'
import MenuCreator from '~/components/MenuCreator'

type HomeProps = {

}

function Playlist (props: HomeProps) {
  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })
  const [creatorMenuOpen, setCreatorMenuOpen] = useState(false)
  const [creatorMenuPos, setCreatorMenuPos] = useState({ top: 0, left: 0 })

  const { headerFixed } = useSelector(({ app }) => app)
  const playlists = usePlaylists()
  const [playlist, setPlaylist] = useState(null)
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

  useEffect(() => {
    console.tron.log({
      id, playlists
    })

    const arr = playlists.filter(playlist => playlist.id === id)
    if (arr.length > 0) {
      setPlaylist(arr[0])
    }
  }, [playlists, id])

  if (!playlist) {
    return null
  }

  return (
    <>
      <Container onContextMenu={e => e.preventDefault()}>
        <Header height={308}>
          <div className="head">
            <div className="cover" onContextMenu={openPlaylistMenu}>
              <img src="https://popcultura.com.br/wp-content/uploads/2019/05/Elton-John-Rocketman-soundtrack-cover-web-optimised-820.jpg" />
              <div className="overlay">
                <Spoticon name="edit" size={60} color="white" />
              </div>
            </div>
            <div className="info">
              <div className="label">Playlist</div>
              <h2 className="title" onContextMenu={openPlaylistMenu}>{playlist.name}</h2>
              <p className="text">
                Created by <a onContextMenu={openCreatorMenu}>{playlist.creator}</a> • {playlist.songsCount} songs, {playlist.timeCount}
              </p>
              <div className="controls">
                <button className="play">
                  <span>Play</span>
                </button>
                <button className="options" onClick={openPlaylistMenu}>
                  <MoreHoriz style={{ color: 'B3B3B3' }} />
                </button>
              </div>
            </div>
          </div>
          <div className="subhead">
            <div className="info">
              <div className="cover">
                <img src="https://popcultura.com.br/wp-content/uploads/2019/05/Elton-John-Rocketman-soundtrack-cover-web-optimised-820.jpg" />
              </div>
              <h2 className="title">Rocketman</h2>
            </div>
            <div className="controls">
              <button className="play">
                <span>Play</span>
              </button>
              <button className="options" onClick={openPlaylistMenu}>
                <MoreHoriz style={{ color: 'B3B3B3' }} />
              </button>
            </div>
          </div>
        </Header>
        {headerFixed && <div className="extra-size" />}
        <SearchBar />
        <Table>
        hell
        </Table>
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
