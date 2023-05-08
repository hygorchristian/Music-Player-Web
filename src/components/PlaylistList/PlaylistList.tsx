import React, { memo, MouseEventHandler, useState } from 'react'
import { useHistory } from 'react-router-dom'

import clsx from 'clsx'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import MenuPlaylist from '~/components/MenuPlaylist'
import api from '~/services/api'
import { useAppSelector } from '~/store'
import { AppActions } from '~/store/ducks/app'
import { Container, ItemContainer } from './styles'

interface HandleMenuInterface {
  currentTarget: HTMLDivElement
}

type PlaylistListProps = {}

type PlaylistItemProps = {
  selected: Boolean
  label: String
}

function PlaylistItem({ selected, label, ...props }: PlaylistItemProps) {
  return (
    <ItemContainer className={clsx({ selected })} {...props}>
      {selected && <div className="indicator" />}
      <span>{label}</span>
    </ItemContainer>
  )
}

function PlaylistList() {
  const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
  const [playlistMenuPos, setPlaylistMenuPos] = useState({ top: 0, left: 0 })

  const history = useHistory()
  const dispatch = useDispatch()
  const { menuSelected } = useAppSelector(({ app }) => app)

  const { data: playlists, isLoading } = useQuery('playlists', () =>
    api.getPlaylists()
  )

  const selectMenu = (name: string) => {
    dispatch(AppActions.setMenuSelected(`@playlist/${name}`))
    history.push(`/playlist/${name}`)
  }

  const handleContextMenu: MouseEventHandler = (e) => {
    e.preventDefault()
  }

  const handleClickAway: MouseEventHandler = () => {
    setPlaylistMenuOpen(false)
  }

  const openPlaylistMenu: any = (e: any) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
    }
    setPlaylistMenuOpen(true)
    setPlaylistMenuPos(pos)
  }

  if (isLoading || !playlists) return null

  return (
    <>
      <Container>
        <h2>Playlists</h2>
        <ul>
          {(playlists ?? []).map((playlist) => (
            <PlaylistItem
              key={playlist.id}
              // @ts-expect-error
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
        onContext={(e: any) => {
          handleContextMenu(e)
          handleClickAway(e)
        }}
      />
    </>
  )
}

export default memo(PlaylistList)
