// @ts-nocheck
import React, { useState, memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Controls, ThumbButton, Slider, SideControls, Button } from './styles'
import MenuAuthor from '~/components/MenuAuthor'
import Sound from 'react-sound'
import MenuTitle from '~/components/MenuTitle'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'
import { ExpandLess } from '@material-ui/icons'
import Spoticon from '~/components/Spoticon/Spoticon'
import { usePlayer } from '~/hooks/player'
import { PlayerActions } from '~/store/ducks/player'
import { getAlbum, getAlbumCover, getArtist } from '~/services/firebase'

type PlaybarProps = {

}

const SM_ICON = 16

function Playbar (props: PlaybarProps) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [titleMenuOpen, setTitleMenuOpen] = useState(false)
  const [titleMenuPos, setTitleMenuPos] = useState({ top: 0, left: 0 })
  const [authorMenuOpen, setAuthorMenuOpen] = useState(false)
  const [authorMenuPos, setAuthorMenuPos] = useState({ top: 0, left: 0 })
  const [muted, setMuted] = useState(false)
  const [coverImg, setCoverImg] = useState(null)
  const [artist, setArtist] = useState(null)

  const [shuffle, setShuffle] = useState(false)
  const [repeatState, setRepeatState] = useState(0)

  const { thumbInBottom } = useSelector(({ app }) => app)
  const { currentSong, status, position: playerPosition, volume } = useSelector(({ player }) => player)
  const { position, duration, positionShown, progress } = usePlayer()

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
    if (currentSong) {
      getAlbumCover(currentSong.album_id, cover => setCoverImg(cover))

      getAlbum(currentSong.album_id, _album => {
        getArtist(_album.artist_id, _artist => {
          setArtist(_artist)
        })
      })
    }
  }, [currentSong])

  useEffect(() => {
    navigator.mediaSession.setActionHandler('play', () => alert('play'))
    navigator.mediaSession.setActionHandler('pause', () => alert('pause'))
    navigator.mediaSession.setActionHandler('seekbackward', () => alert('seekbackward'))
    navigator.mediaSession.setActionHandler('seekforward', () => alert('seekforward'))
    navigator.mediaSession.setActionHandler('previoustrack', () => alert('previoustrack'))
    navigator.mediaSession.setActionHandler('nexttrack', () => alert('nexttrack'))
  }, [])

  return (
    <>
      { !!currentSong && (
        <Sound
          url={currentSong.file.downloadURL}
          playStatus={status}
          onFinishedPlaying={() => dispatch(PlayerActions.next())}
          onPlaying={({ position, duration }) => dispatch(PlayerActions.playing(position, duration))}
          onLoad={() => {}}
          position={playerPosition}
          volume={muted ? 0 : volume}
        />
      )}
      <Container onContextMenu={handleContextMenu}>
        <div className="music">
          {!!currentSong && <div className={`thumbnail ${!thumbInBottom && 'hide'}`}>
            <img src={coverImg} />
            <ThumbButton size="small" color="primary" onClick={toggleThumb}>
              <ExpandLess style={{ fontSize: 14 }} />
            </ThumbButton>
          </div>}
          {!!currentSong && <div className={`music-info ${!thumbInBottom && 'hide'}`}>
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
          </div>}
        </div>
        <Controls>
          <div className="buttons">
            <Button className={shuffle && 'active'} onClick={() => setShuffle(!shuffle)}>
              <div className="dot" />
              <Spoticon name="shuffle" size={SM_ICON} />
            </Button>
            <Button onClick={() => dispatch(PlayerActions.prev())}>
              <Spoticon name="prev" size={SM_ICON} />
            </Button>
            {status === Sound.status.PLAYING ? (
              <Button className="large" onClick={() => dispatch(PlayerActions.pause())}>
                <div className="control">
                  <Spoticon name="pause" size={SM_ICON} />
                </div>
              </Button>
            ) : (
              <Button className="large" onClick={() => dispatch(PlayerActions.play())}>
                <div className="control">
                  <Spoticon name="play" size={SM_ICON} />
                </div>
              </Button>
            )}
            <Button onClick={() => dispatch(PlayerActions.next())}>
              <Spoticon name="next" size={SM_ICON} />
            </Button>
            <Button className={repeatState !== 0 && 'active'} onClick={handleRepeat}>
              <div className="dot" />
              {repeatState === 0 && <Spoticon name="repeat" size={SM_ICON} />}
              {repeatState === 1 && <Spoticon name="repeat" size={SM_ICON} />}
              {repeatState === 2 && <Spoticon name="repeat-one" size={SM_ICON} />}
            </Button>
          </div>
          <div className="progress-slider">
            <div className="time progress">{positionShown || position}</div>
            <Slider
              min={0}
              max={1000}
              onChange={(event, value) => dispatch(PlayerActions.handlePosition(value / 1000))}
              onChangeCommitted={(event, value) => dispatch(PlayerActions.setPosition(value / 1000))}
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
            {(volume === 0 || muted) && <Spoticon name="volume-off" size={18} />}
            {(volume > 0 && !muted && volume <= 30) && <Spoticon name="volume-low" size={18} />}
            {(volume > 30 && !muted && volume <= 60) && <Spoticon name="volume-medium" size={18} />}
            {(volume > 60 && !muted && volume <= 100) && <Spoticon name="volume-high" size={18} />}
          </button>
          <div className="volume-slider">
            <Slider
              min={0}
              max={100}
              onChange={(event, value) => dispatch(PlayerActions.setVolume(value))}
              value={muted ? 0 : volume}
            />
          </div>
          <button>
            <Spoticon name="expand" size={18} />
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
