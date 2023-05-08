import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Action Types & Creators

const { Types, Creators } = createActions({
  toggleThumb: null,
  setMenuSelected: ['name'],
  setScrollTop: ['top'],
  setHeaderFixed: ['isFixed'],
})

export const AppTypes = Types
export const AppActions = Creators

// Initial State

export const INITIAL_STATE = Immutable({
  thumbInBottom: true,
  menuSelected: 'home',
  scrollTop: 0,
  headerFixed: false,
})

type AppState = {
  thumbInBottom: boolean
  menuSelected: string
  scrollTop: number
  headerFixed: boolean
}

// Action Interfaces

interface ToggleThumbAction {
  type: typeof AppTypes.TOGGLE_THUMB
}

interface SetMenuSelectedAction {
  type: typeof AppTypes.SET_MENU_SELECTED
  name: string
}

interface SetScrollTopAction {
  type: typeof AppTypes.SET_SCROLL_TOP
  top: number
}

interface SetHeaderFixedAction {
  type: typeof AppTypes.SET_HEADER_FIXED
  isFixed: boolean
}

// Combined Action Type
type AppAction =
  | ToggleThumbAction
  | SetMenuSelectedAction
  | SetScrollTopAction
  | SetHeaderFixedAction

// Reducer Functions

const toggleThumb = (state: AppState): AppState => ({
  ...state,
  thumbInBottom: !state.thumbInBottom,
})
const setMenuSelected = (
  state: AppState,
  { name }: SetMenuSelectedAction
): AppState => ({ ...state, menuSelected: name })
const setScrollTop = (
  state: AppState,
  { top }: SetScrollTopAction
): AppState => ({
  ...state,
  scrollTop: top,
})
const setHeaderFixed = (
  state: AppState,
  { isFixed }: SetHeaderFixedAction
): AppState => ({
  ...state,
  headerFixed: isFixed,
})

// Reducer

export const AppReducer = createReducer<AppState, AppAction>(INITIAL_STATE, {
  [Types.TOGGLE_THUMB]: toggleThumb,
  [Types.SET_MENU_SELECTED]: setMenuSelected,
  [Types.SET_SCROLL_TOP]: setScrollTop,
  [Types.SET_HEADER_FIXED]: setHeaderFixed,
})
