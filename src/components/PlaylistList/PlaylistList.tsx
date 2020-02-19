// @ts-nocheck

import React, { useState, memo } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, ItemContainer } from './styles'
import MenuPlaylist from '~/components/MenuPlaylist'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'
import { usePlaylists } from '~/services/firebase'

interface HandleMenuInterface {
  currentTarget: HTMLDivElement
}

type PlaylistListProps = {

}

type PlaylistItemProps = {
  selected: Boolean,
  label: String
}

function PlaylistItem ({ selected, label, ...props }: PlaylistItemProps) {
  return (
    <ItemContainer
      className={selected && 'selected'}
      {...props}
    >
      {selected && <div className="indicator" />}
      <span>{label}</span>
    </ItemContainer>
  )
}

function PlaylistList (props: PlaylistListProps) {
  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })

  const history = useHistory()
  const dispatch = useDispatch()
  const { menuSelected } = useSelector(({ app }) => app)
  const playlists = usePlaylists()

  const selectMenu = (name) => {
    dispatch(AppActions.setMenuSelected(`@playlist/${name}`))
    history.push(`/playlist/${name}`)
  }

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault()
  }

  const handleClickAway = () => {
    setPlaylistMenuOpen(false)
  }

  const openPlaylistMenu = (e: HandleMenuInterface) => {
    const pos = {
      left: e.clientX,
      top: e.clientY
    }
    setPlaylistMenuOpen(true)
    setPlaylistMenuPos(pos)
  }

  return (
    <>
      <Container>
        <h2>Playlists</h2>
        <ul>
          {playlists.map(playlist => (
            <PlaylistItem
              key={playlist.id}
              onContextMenu={openPlaylistMenu}
              onClick={() => selectMenu(playlist.id)}
              selected={menuSelected === `@playlist/${playlist.id}`}
              label={playlist.name}
            />
          ))}
        </ul>
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
    </>
  )
}

export default memo(PlaylistList)
