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

function MenuTitle(props: MenuAuthorProps) {
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
        <MenuItem>Add to Queue</MenuItem>
        <MenuItem>Go to Song Radio</MenuItem>
        <Divider></Divider>
        <MenuItem>Go to Artist</MenuItem>
        <MenuItem>Go to Album</MenuItem>
        <MenuItem>Show Credits</MenuItem>
        <Divider></Divider>
        <MenuItem>Save to your Liked Songs</MenuItem>
        <MenuItem>Add to Playlist</MenuItem>
        <Divider></Divider>
        <MenuItem>Share</MenuItem>
      </MenuList>
    </Popover>
  )
}

export default MenuTitle
