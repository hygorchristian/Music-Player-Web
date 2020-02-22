// @ts-nocheck
import React from 'react'

import { Divider, MenuList, Popover } from '@material-ui/core'
import MenuItem from '~/components/MenuItem'

type MenuAlbumProps = {
  open: Boolean,
  position: Object,
  onClickAway: Function,
  onContext: Function
}

function MenuAlbum (props: MenuAlbumProps) {
  const { open, position, onClickAway, onContext } = props

  return (
    <Popover
      open={open}
      anchorReference="anchorPosition"
      anchorPosition={position}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      onBackdropClick={onClickAway}
      onContextMenu={onContext}
    >
      <MenuList>
        <MenuItem>Add to Queue</MenuItem>
        <MenuItem>Go to Artist Radio</MenuItem>
        <MenuItem>Go to Artist</MenuItem>
        <Divider></Divider>
        <MenuItem>Remove from Your Library</MenuItem>
        <MenuItem>Add to Playlist</MenuItem>
        <Divider></Divider>
        <MenuItem>Share</MenuItem>
        <Divider></Divider>
      </MenuList>
    </Popover>
  )
}

export default MenuAlbum
