import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { PropertyTypes } from '~/types/Data'

// Action Types & Creators

const { Types, Creators } = createActions({
  load: ['song', 'list', 'playlist', 'album'],
  play: null,
  pause: null,
  playing: ['position', 'duration'],
  next: null,
  prev: null,
  handlePosition: ['percent'],
  setPosition: ['percent'],
  setVolume: ['volume'],
  currentAlbum: null,
  currentPlaylist: null,
})

export const PlayerTypes = Types
export const PlayerActions = Creators

// Initial State

export const playerStatus = {
  PLAYING: 'PLAYING',
  STOPPED: 'STOPPED',
  PAUSED: 'PAUSED',
} as const

export const INITIAL_STATE = Immutable({
  currentSong: null,
  status: playerStatus.PAUSED,
  list: [],
  position: null,
  duration: null,
  positionShown: null,
  volume: 100,
})

type Status = PropertyTypes<typeof playerStatus>

type PlayerState = {
  currentSong: any
  status: Status
  list: any[]
  position: number
  duration: number
  positionShown?: number
  volume: number
  currentPlaylist?: any
  currentAlbum?: any
}

// Action Interfaces

interface LoadAction {
  type: typeof PlayerTypes.LOAD
  song: any // Replace with the actual song type
  list: any[] // Replace with the actual list type
  playlist: any // Replace with the actual playlist type
  album: any // Replace with the actual album type
}

interface PlayAction {
  type: typeof PlayerTypes.PLAY
}

interface PauseAction {
  type: typeof PlayerTypes.PAUSE
}

interface PlayingAction {
  type: typeof PlayerTypes.PLAYING
  position: number
  duration: number
}

interface NextAction {
  type: typeof PlayerTypes.NEXT
}

interface PrevAction {
  type: typeof PlayerTypes.PREV
}

interface HandlePositionAction {
  type: typeof PlayerTypes.HANDLE_POSITION
  percent: number
}

interface SetPositionAction {
  type: typeof PlayerTypes.SET_POSITION
  percent: number
}

interface SetVolumeAction {
  type: typeof PlayerTypes.SET_VOLUME
  volume: number
}

// Combined Action Type
type PlayerAction =
  | LoadAction
  | PlayAction
  | PauseAction
  | PlayingAction
  | NextAction
  | PrevAction
  | HandlePositionAction
  | SetPositionAction
  | SetVolumeAction

// Reducer Functions

const load = (
  state: PlayerState,
  { song, list, playlist, album }: LoadAction
): PlayerState => ({
  ...state,
  position: 0,
  currentSong: song,
  status: playerStatus.PLAYING,
  list,
  currentPlaylist: playlist,
  currentAlbum: album,
})
const play = (state: PlayerState): PlayerState => ({
  ...state,
  status: playerStatus.PLAYING,
})
const pause = (state: PlayerState): PlayerState => ({
  ...state,
  status: playerStatus.PAUSED,
})
const next = (state: PlayerState): PlayerState => {
  const currentIndex = state.list.findIndex(
    (song) => song.id === state.currentSong.id
  )
  const prev = state.list[currentIndex + 1]
  if (prev) return { ...state, currentSong: prev, position: 0 }
  return { ...state }
}
const prev = (state: PlayerState): PlayerState => {
  const currentIndex = state.list.findIndex(
    (song) => song.id === state.currentSong.id
  )
  const prev = state.list[currentIndex - 1]
  if (prev) return { ...state, currentSong: prev, position: 0 }
  return { ...state }
}
const playing = (
  state: PlayerState,
  { position, duration }: PlayingAction
): PlayerState => ({ ...state, position, duration })
const handlePosition = (
  state: PlayerState,
  { percent }: HandlePositionAction
): PlayerState => ({ ...state, positionShown: state.duration * percent })
const setPosition = (
  state: PlayerState,
  { percent }: SetPositionAction
): PlayerState => ({
  ...state,
  position: state.duration * percent,
  positionShown: undefined,
})
const setVolume = (
  state: PlayerState,
  { volume }: SetVolumeAction
): PlayerState => ({
  ...state,
  volume,
})

// Reducer
export const PlayerReducer = createReducer<PlayerState, PlayerAction>(
  // @ts-expect-error
  INITIAL_STATE,
  {
    [Types.LOAD]: load,
    [Types.PLAY]: play,
    [Types.PAUSE]: pause,
    [Types.NEXT]: next,
    [Types.PREV]: prev,
    [Types.PLAYING]: playing,
    [Types.HANDLE_POSITION]: handlePosition,
    [Types.SET_POSITION]: setPosition,
    [Types.SET_VOLUME]: setVolume,
  }
)
