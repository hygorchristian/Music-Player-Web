// @ts-nocheck
import React from 'react'

import { Divider, MenuList, Popover } from '@material-ui/core'
import MenuItem from '~/components/MenuItem'

type MenuAuthorProps = {
  open: Boolean
  position: Object
  onClickAway: Function
  onContext: Function
}

function MenuPlaylist(props: MenuAuthorProps) {
  const { open, position, onClickAway, onContext } = props

  return (
    <Popover
      open={open}
      anchorReference="anchorPosition"
      anchorPosition={position}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={onClickAway}
      onContextMenu={onContext}
    >
      <MenuList>
        <MenuItem>Go to Playlist Radio</MenuItem>
        <Divider></Divider>
        <MenuItem>Make Public</MenuItem>
        <Divider></Divider>
        <MenuItem>Report</MenuItem>
        <MenuItem>Remove from Your Library</MenuItem>
        <Divider></Divider>
        <MenuItem disabled>Create Similar Playlist</MenuItem>
        <MenuItem>Create Playlist</MenuItem>
        <MenuItem>Create Folder</MenuItem>
        <MenuItem>Download</MenuItem>
        <Divider></Divider>
        <MenuItem>Share</MenuItem>
      </MenuList>
    </Popover>
  )
}

export default MenuPlaylist
