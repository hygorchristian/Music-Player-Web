// @ts-nocheck
import React, { MouseEvent, useState } from 'react'

import { Container } from './styles'
import MenuAuthor from '~/components/MenuAuthor'
import MenuTitle from '~/components/MenuTitle'

interface HandleMenuInterface {
  currentTarget: HTMLDivElement
}

type PlaybarProps = {

}

function Playbar (props: PlaybarProps) {
  const [titleMenuOpen, setTitleMenuOpen] = useState(false)
  const [titleMenuPos, setTitleMenuPos] = useState({ top: 0, left: 0 })
  const [authorMenuOpen, setAuthorMenuOpen] = useState(false)
  const [authorMenuPos, setAuthorMenuPos] = useState({ top: 0, left: 0 })

  const handleContextMenu = (event: MouseEvent) => {
    event && event.preventDefault()
  }

  const openTitleMenu = (e: HandleMenuInterface) => {
    const pos = {
      left: e.clientX,
      top: e.clientY
    }
    setTitleMenuOpen(true)
    setTitleMenuPos(pos)
  }

  const openAuthorMenu = (e: HandleMenuInterface) => {
    const pos = {
      left: e.clientX,
      top: e.clientY
    }
    setAuthorMenuOpen(true)
    setAuthorMenuPos(pos)
  }

  const closeTitleMenu = () => {
    setTitleMenuOpen(false)
  }

  const closeAuthorMenu = () => {
    setAuthorMenuOpen(false)
  }

  const handleClickAway = () => {
    closeTitleMenu()
    closeAuthorMenu()
  }

  return (
    <>
      <Container onContextMenu={handleContextMenu}>
        <div className="music">
          <img/>
          <div className="music-info">
            <div className="music-title">
              <div className="title" onContextMenu={openTitleMenu}>
                <span>Trashed and Scattered</span>
              </div>
              {/* <Icon /> */}
            </div>
            <div className="author-name" onContextMenu={openAuthorMenu}>
              <span>Avenged Sevenfold</span>
            </div>
          </div>
        </div>
        {/* <Controls /> */}
        {/* <SideControls /> */}
      </Container>
      <MenuAuthor
        open={authorMenuOpen}
        position={authorMenuPos}
        onClickAway={handleClickAway}
        onContext={() => {
          handleContextMenu()
          handleClickAway()
        }}
      />
      <MenuTitle
        open={titleMenuOpen}
        position={titleMenuPos}
        onClickAway={handleClickAway}
        onContext={() => {
          handleContextMenu()
          handleClickAway()
        }}
      />
    </>
  )
}

export default Playbar
