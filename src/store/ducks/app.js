import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Action Types & Creators

const { Types, Creators } = createActions({
  toggleThumb: null,
  setMenuSelected: ['name'],
  setScrollTop: ['top'],
  setHeaderFixed: ['isFixed']
})

export const AppTypes = Types
export const AppActions = Creators

// Initial State

export const INITIAL_STATE = Immutable({
  thumbInBottom: true,
  menuSelected: 'home',
  scrollTop: 0,
  headerFixed: false
})

// Reducer Functions

const toggleThumb = state => ({ ...state, thumbInBottom: !state.thumbInBottom })
const setMenuSelected = (state, { name }) => ({ ...state, menuSelected: name })
const setScrollTop = (state, { top }) => ({ ...state, scrollTop: top })
const setHeaderFixed = (state, { isFixed }) => ({ ...state, headerFixed: isFixed })

// Reducer

export const AppReducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_THUMB]: toggleThumb,
  [Types.SET_MENU_SELECTED]: setMenuSelected,
  [Types.SET_SCROLL_TOP]: setScrollTop,
  [Types.SET_HEADER_FIXED]: setHeaderFixed
})
