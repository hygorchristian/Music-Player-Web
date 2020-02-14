// @ts-nocheck
import React, { useState } from 'react'

import { Container, Controls, ThumbButton, Slider, SideControls, Button } from './styles'
import MenuAuthor from '~/components/MenuAuthor'
import MenuTitle from '~/components/MenuTitle'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'
import { ExpandLess } from '@material-ui/icons'
import { ReactSVG } from 'react-svg'

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
  const dispatch = useDispatch()

  const { thumbInBottom } = useSelector(({ app }) => app)

  const toggleThumb = () => {
    dispatch(AppActions.toggleThumb())
  }

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
          <div className={`thumbnail ${!thumbInBottom && 'hide'}`}>
            <img src="/img/mock/cover_1.jpg" alt="cover"/>
            <ThumbButton size="small" color="primary" onClick={toggleThumb}>
              <ExpandLess style={{ fontSize: 14 }} />
            </ThumbButton>
          </div>
          <div className={`music-info ${!thumbInBottom && 'hide'}`}>
            <div className="music-title">
              <div className="title" onContextMenu={openTitleMenu}>
                <span>Trashed and Scattered</span>
              </div>
            </div>
            <div className="author-name" onContextMenu={openAuthorMenu}>
              <span>Avenged Sevenfold</span>
            </div>
          </div>
        </div>
        <Controls>
          <div className="buttons">
            <Button>
              <ReactSVG className="control-icon" src="/icons/shuffle.svg" />
            </Button>
            <Button>
              <ReactSVG className="control-icon" src="/icons/skip-previous.svg" />
            </Button>
            <Button className="large">
              <ReactSVG className="control-icon large" src="/icons/play-circle-outline.svg" />
            </Button>
            <Button>
              <ReactSVG className="control-icon" src="/icons/skip-next.svg" />
            </Button>
            <Button>
              <ReactSVG className="control-icon" src="/icons/repeat.svg" />
            </Button>
          </div>
          <div className="progress-slider">
            <Slider id="slider-irado" value={10} />
          </div>
        </Controls>
        <SideControls />
      </Container>
      <MenuAuthor
        open={authorMenuOpen}
        position={authorMenuPos}
        onClickAway={handleClickAway}
        onContext={(e) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
      <MenuTitle
        open={titleMenuOpen}
        position={titleMenuPos}
        onClickAway={handleClickAway}
        onContext={(e) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
    </>
  )
}

export default Playbar
