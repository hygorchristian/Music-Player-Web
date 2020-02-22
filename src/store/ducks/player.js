import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Player from 'react-sound'

// Action Types & Creators

const { Types, Creators } = createActions({
  load: ['song', 'list'],
  play: null,
  pause: null,
  playing: ['position', 'duration'],
  next: null,
  prev: null,
  handlePosition: ['percent'],
  setPosition: ['percent'],
  setVolume: ['volume']
})

export const PlayerTypes = Types
export const PlayerActions = Creators

// Initial State

export const INITIAL_STATE = Immutable({
  currentSong: null,
  status: Player.status.PAUSED,
  list: [],
  position: null,
  duration: null,
  positionShown: null,
  volume: 100
})

// Reducer Functions

const load = (state, { song, list }) => ({ ...state, position: 0, currentSong: song, status: Player.status.PLAYING, list })
const play = state => ({ ...state, status: Player.status.PLAYING })
const pause = state => ({ ...state, status: Player.status.PAUSED })
const next = (state) => {
  const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id)
  const prev = state.list[currentIndex + 1]
  if (prev) return { ...state, currentSong: prev, position: 0 }
  return { ...state }
}
const prev = state => {
  const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id)
  const prev = state.list[currentIndex - 1]
  if (prev) return { ...state, currentSong: prev, position: 0 }
  return { ...state }
}
const playing = (state, { position, duration }) => ({ ...state, position, duration })
const handlePosition = (state, { percent }) => ({ ...state, positionShown: state.duration * percent })
const setPosition = (state, { percent }) => ({ ...state, position: state.duration * percent, positionShown: null })
const setVolume = (state, { volume }) => ({ ...state, volume })

// Reducer

export const PlayerReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD]: load,
  [Types.PLAY]: play,
  [Types.PAUSE]: pause,
  [Types.NEXT]: next,
  [Types.PREV]: prev,
  [Types.PLAYING]: playing,
  [Types.HANDLE_POSITION]: handlePosition,
  [Types.SET_POSITION]: setPosition,
  [Types.SET_VOLUME]: setVolume
})
