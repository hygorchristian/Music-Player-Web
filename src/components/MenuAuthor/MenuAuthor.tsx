// @ts-nocheck
import React from 'react'

import { Divider, MenuList, Popover } from '@material-ui/core'
import MenuItem from '~/components/MenuItem'

type MenuAuthorProps = {
  open: Boolean,
  position: Object,
  onClickAway: Function,
  onContext: Function
}

function MenuAuthor (props: MenuAuthorProps) {
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
      onClose={onClickAway}
      onContextMenu={onContext}
    >
      <MenuList>
        <MenuItem>Go to Artist Radio</MenuItem>
        <Divider></Divider>
        <MenuItem>Follow</MenuItem>
        <MenuItem>Report</MenuItem>
        <Divider></Divider>
        <MenuItem>Share</MenuItem>
      </MenuList>
    </Popover>
  )
}

export default MenuAuthor
