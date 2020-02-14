// @ts-nocheck

import React, { useState } from 'react'

import { Container, ItemContainer } from './styles'
import MenuPlaylist from '~/components/MenuPlaylist'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'

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

  const dispatch = useDispatch()
  const { menuSelected } = useSelector(({ app }) => app)

  const selectMenu = (name) => {
    dispatch(AppActions.setMenuSelected(name))
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
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('1')}
            selected={menuSelected === '1'}
            label="Rocketman: Elton J..."
          />
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('2')}
            selected={menuSelected === '2'}
            label="Hard Rock 🤟"
          />
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('3')}
            selected={menuSelected === '3'}
            label="Nerdcast RPG 🎲"
          />
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('4')}
            selected={menuSelected === '4'}
            label="Piano"
          />
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('5')}
            selected={menuSelected === '5'}
            label="Easy come, Easy Go"
          />
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('6')}
            selected={menuSelected === '6'}
            label="Disco"
          />
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('7')}
            selected={menuSelected === '7'}
            label="Fuck the System"
          />
          <PlaylistItem
            onContextMenu={openPlaylistMenu}
            onClick={() => selectMenu('8')}
            selected={menuSelected === '8'}
            label="Yuyu Playlist"
          />
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

export default PlaylistList
