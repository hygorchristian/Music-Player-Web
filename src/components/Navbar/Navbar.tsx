// @ts-nocheck
import React, { memo } from 'react'
import { ReactSVG } from 'react-svg'

import { ExpandMore } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import ItemMainMenu from '~/components/ItemMainMenu'
import LibraryList from '~/components/LibraryList'
import { ThumbButton } from '~/components/Playbar/styles'
import PlaylistList from '~/components/PlaylistList'
import { useAppSelector } from '~/store'
import { AppActions } from '~/store/ducks/app'
import { Container, Scroll, Thumb } from './styles'

type NavbarProps = {}

function Navbar(props: NavbarProps) {
  const dispatch = useDispatch()
  const { thumbInBottom, menuSelected } = useAppSelector(({ app }) => app)
  const { currentSong } = useAppSelector(({ player }) => player)

  const handleContext = (e: MouseEvent) => {
    e.preventDefault()
  }

  const toggleThumb = () => {
    dispatch(AppActions.toggleThumb())
  }

  const selectMenu = (name) => {
    dispatch(AppActions.setMenuSelected(name))
  }

  return (
    <Container onContextMenu={handleContext}>
      <nav className="menu">
        <ul>
          <ItemMainMenu
            onClick={() => selectMenu('home')}
            selected={menuSelected === 'home'}
            icon="home"
            label="Home"
            height={19}
            width={18}
          />
          <ItemMainMenu
            onClick={() => selectMenu('browse')}
            selected={menuSelected === 'browse'}
            icon="browse"
            label="Browse"
            height={17}
            width={20}
          />
          <ItemMainMenu
            onClick={() => selectMenu('radio')}
            selected={menuSelected === 'radio'}
            icon="radio"
            label="Radio"
            height={18}
            width={22}
          />
        </ul>
      </nav>
      <div className="scroll-list">
        <Scroll renderThumbVertical={(props) => <Thumb {...props} />}>
          <div className="content">
            <LibraryList />
            <PlaylistList />
          </div>
        </Scroll>
      </div>
      <div className="playlist-menu">
        <ReactSVG src="/icons/plus-circle.svg" />
        <span>New Playlist</span>
      </div>
      <div className={`thumbnail ${thumbInBottom && 'hide'}`}>
        <img src={currentSong?.album?.cover_image} />
        <ThumbButton size="small" color="primary" onClick={toggleThumb}>
          <ExpandMore style={{ fontSize: 14 }} />
        </ThumbButton>
      </div>
    </Container>
  )
}

export default memo(Navbar)
