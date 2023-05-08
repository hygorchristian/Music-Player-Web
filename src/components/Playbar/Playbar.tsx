import { ExpandLess } from '@material-ui/icons'
import clsx from 'clsx'
import React, { memo, MouseEventHandler, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Sound from 'react-sound'
import MenuAuthor from '~/components/MenuAuthor'
import MenuTitle from '~/components/MenuTitle'
import Spoticon from '~/components/Spoticon/Spoticon'
import { usePlayer } from '~/hooks/player'
import useFullscreenStatus from '~/hooks/useFullscreen'
import { useAppSelector } from '~/store'
import { AppActions } from '~/store/ducks/app'
import { PlayerActions, playerStatus } from '~/store/ducks/player'
import toggleFullscreen from '~/utils/fullscreen'
import {
  Button,
  Container,
  Controls,
  SideControls,
  Slider,
  ThumbButton,
} from './styles'

type PlaybarProps = {}

const SM_ICON = 16

function Playbar(props: PlaybarProps) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [titleMenuOpen, setTitleMenuOpen] = useState(false)
  const [titleMenuPos, setTitleMenuPos] = useState({ top: 0, left: 0 })
  const [authorMenuOpen, setAuthorMenuOpen] = useState(false)
  const [authorMenuPos, setAuthorMenuPos] = useState({ top: 0, left: 0 })
  const [muted, setMuted] = useState(false)
  const isFullscreen = useFullscreenStatus()

  const [shuffle, setShuffle] = useState(false)
  const [repeatState, setRepeatState] = useState(0)

  const { thumbInBottom } = useAppSelector(({ app }) => app)
  const {
    currentSong,
    status,
    position: playerPosition,
    volume,
  } = useAppSelector(({ player }) => player)
  const { position, duration, positionShown, progress } = usePlayer()

  const toggleThumb = () => {
    dispatch(AppActions.toggleThumb())
  }

  const handleContextMenu: MouseEventHandler<HTMLDivElement> = (event) => {
    event && event.preventDefault()
  }

  const openTitleMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
    }
    setTitleMenuOpen(true)
    setTitleMenuPos(pos)
  }

  const openAuthorMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    const pos = {
      left: e.clientX,
      top: e.clientY,
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

  const handleRepeat = () => {
    const num = repeatState + 1

    if (num === 3) {
      setRepeatState(0)
      return
    }

    setRepeatState(num)
  }

  const handleClickAway = () => {
    closeTitleMenu()
    closeAuthorMenu()
  }

  useEffect(() => {
    navigator.mediaSession.setActionHandler('play', () => alert('play'))
    navigator.mediaSession.setActionHandler('pause', () => alert('pause'))
    navigator.mediaSession.setActionHandler('seekbackward', () =>
      alert('seekbackward')
    )
    navigator.mediaSession.setActionHandler('seekforward', () =>
      alert('seekforward')
    )
    navigator.mediaSession.setActionHandler('previoustrack', () =>
      alert('previoustrack')
    )
    navigator.mediaSession.setActionHandler('nexttrack', () =>
      alert('nexttrack')
    )
  }, [])

  const album = currentSong?.album
  const artist = album?.artist

  if (!currentSong || !album || !artist) return null

  return (
    <>
      {!!currentSong && (
        <Sound
          url={currentSong.music_url}
          playStatus={status}
          onFinishedPlaying={() => dispatch(PlayerActions.next())}
          // @ts-expect-error
          onPlaying={({ position, duration }) =>
            dispatch(PlayerActions.playing(position, duration))
          }
          onLoad={() => {}}
          position={playerPosition}
          volume={muted ? 0 : volume}
        />
      )}
      <Container onContextMenu={handleContextMenu}>
        <div className="music">
          <div className={`thumbnail ${!thumbInBottom && 'hide'}`}>
            <img src={album.cover_image} />
            <ThumbButton size="small" color="primary" onClick={toggleThumb}>
              <ExpandLess style={{ fontSize: 14 }} />
            </ThumbButton>
          </div>
          <div className={`music-info ${!thumbInBottom && 'hide'}`}>
            <div className="music-title">
              <div className="title" onContextMenu={openTitleMenu}>
                <span>{currentSong.name}</span>
              </div>
              <button>
                <Spoticon name="heart" size={16} />
              </button>
            </div>
            <div
              className="author-name"
              onContextMenu={openAuthorMenu}
              onClick={() => artist && history.push(`/artist/${artist.id}`)}
            >
              <span>{artist && artist.name}</span>
            </div>
          </div>
        </div>
        <Controls>
          <div className="buttons">
            <Button
              className={clsx({ active: shuffle })}
              onClick={() => setShuffle(!shuffle)}
            >
              <div className="dot" />
              <Spoticon name="shuffle" size={SM_ICON} />
            </Button>
            <Button onClick={() => dispatch(PlayerActions.prev())}>
              <Spoticon name="prev" size={SM_ICON} />
            </Button>
            {status === playerStatus.PLAYING ? (
              <Button
                className="large"
                onClick={() => dispatch(PlayerActions.pause())}
              >
                <div className="control">
                  <Spoticon name="pause" size={SM_ICON} />
                </div>
              </Button>
            ) : (
              <Button
                className="large"
                onClick={() => dispatch(PlayerActions.play())}
              >
                <div className="control">
                  <Spoticon name="play" size={SM_ICON} />
                </div>
              </Button>
            )}
            <Button onClick={() => dispatch(PlayerActions.next())}>
              <Spoticon name="next" size={SM_ICON} />
            </Button>
            <Button
              className={clsx({ active: repeatState })}
              onClick={handleRepeat}
            >
              <div className="dot" />
              {repeatState === 0 && <Spoticon name="repeat" size={SM_ICON} />}
              {repeatState === 1 && <Spoticon name="repeat" size={SM_ICON} />}
              {repeatState === 2 && (
                <Spoticon name="repeat-one" size={SM_ICON} />
              )}
            </Button>
          </div>
          <div className="progress-slider">
            <div className="time progress">{positionShown || position}</div>
            {/* @ts-expect-error */}
            <Slider
              min={0}
              max={1000}
              onChange={(event, value) =>
                // @ts-expect-error
                dispatch(PlayerActions.handlePosition(value / 1000))
              }
              onChangeCommitted={(event, value) =>
                // @ts-expect-error
                dispatch(PlayerActions.setPosition(value / 1000))
              }
              value={progress}
            />
            <div className="time">{duration}</div>
          </div>
        </Controls>
        <SideControls>
          <button>
            <Spoticon name="playlist" size={18} />
          </button>
          <button style={{ marginLeft: 16 }}>
            <Spoticon name="devices" size={18} />
          </button>
          <button style={{ marginLeft: 16 }} onClick={() => setMuted(!muted)}>
            {(volume === 0 || muted) && (
              <Spoticon name="volume-off" size={18} />
            )}
            {volume > 0 && !muted && volume <= 30 && (
              <Spoticon name="volume-low" size={18} />
            )}
            {volume > 30 && !muted && volume <= 60 && (
              <Spoticon name="volume-medium" size={18} />
            )}
            {volume > 60 && !muted && volume <= 100 && (
              <Spoticon name="volume-high" size={18} />
            )}
          </button>
          <div className="volume-slider">
            {/* @ts-expect-error */}
            <Slider
              min={0}
              max={100}
              onChange={(event, value) =>
                dispatch(PlayerActions.setVolume(value))
              }
              value={muted ? 0 : volume}
            />
          </div>
          <button onClick={() => toggleFullscreen()}>
            {isFullscreen ? (
              <Spoticon name="compress" size={18} />
            ) : (
              <Spoticon name="expand" size={18} />
            )}
          </button>
        </SideControls>
      </Container>
      <MenuAuthor
        open={authorMenuOpen}
        position={authorMenuPos}
        onClickAway={handleClickAway}
        onContext={(e: any) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
      <MenuTitle
        open={titleMenuOpen}
        position={titleMenuPos}
        onClickAway={handleClickAway}
        onContext={(e: any) => {
          handleContextMenu(e)
          handleClickAway()
        }}
      />
    </>
  )
}

export default memo(Playbar)
