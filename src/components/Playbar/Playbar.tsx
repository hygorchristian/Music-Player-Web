// @ts-nocheck
import React, { useState, memo } from 'react'
import { Container, Controls, ThumbButton, Slider, SideControls, Button } from './styles'
import MenuAuthor from '~/components/MenuAuthor'
import MenuTitle from '~/components/MenuTitle'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'
import { ExpandLess } from '@material-ui/icons'
import Spoticon from '~/components/Spoticon/Spoticon'

type PlaybarProps = {

}

const SM_ICON = 16

function Playbar (props: PlaybarProps) {
  const dispatch = useDispatch()
  const [titleMenuOpen, setTitleMenuOpen] = useState(false)
  const [titleMenuPos, setTitleMenuPos] = useState({ top: 0, left: 0 })
  const [authorMenuOpen, setAuthorMenuOpen] = useState(false)
  const [authorMenuPos, setAuthorMenuPos] = useState({ top: 0, left: 0 })

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
            <img src="https://popcultura.com.br/wp-content/uploads/2019/05/Elton-John-Rocketman-soundtrack-cover-web-optimised-820.jpg" alt="cover"/>
            <ThumbButton size="small" color="primary" onClick={toggleThumb}>
              <ExpandLess style={{ fontSize: 14 }} />
            </ThumbButton>
          </div>
          <div className={`music-info ${!thumbInBottom && 'hide'}`}>
            <div className="music-title">
              <div className="title" onContextMenu={openTitleMenu}>
                <span>Nikita</span>
              </div>
              <button>
                <Spoticon name="heart" size={16} />
              </button>
            </div>
            <div className="author-name" onContextMenu={openAuthorMenu}>
              <span>Elton John</span>
            </div>
          </div>
        </div>
        <Controls>
          <div className="buttons">
            <Button>
              <Spoticon name="shuffle" size={SM_ICON} />
            </Button>
            <Button>
              <Spoticon name="prev" size={SM_ICON} />
            </Button>
            <Button className="large">
              <div className="control">
                <Spoticon name="play" size={SM_ICON} />
              </div>
            </Button>
            <Button>
              <Spoticon name="next" size={SM_ICON} />
            </Button>
            <Button>
              <Spoticon name="repeat" size={SM_ICON} />
            </Button>
          </div>
          <div className="progress-slider">
            <Slider id="slider-irado" value={10} />
          </div>
        </Controls>
        <SideControls>
          <button>
            <Spoticon name="playlist" size={16} />
          </button>
          <button style={{ marginLeft: 16 }}>
            <Spoticon name="devices" size={16} />
          </button>
          <button style={{ marginLeft: 16 }}>
            <Spoticon name="volume-high" size={16} />
          </button>
          <div className="volume-slider" size={16}>
            <Slider value={50} />
          </div>
          <button>
            <Spoticon name="expand" size={16} />
          </button>
        </SideControls>
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

export default memo(Playbar)
