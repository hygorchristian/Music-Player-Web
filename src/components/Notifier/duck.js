import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Action Types & Creators

const { Types, Creators } = createActions({
  removeSnackbar: ['key'],
  enqueueSnackbar: ['notification']
})

export const NotistackTypes = Types
export const NotistackActions = Creators

// Initial State

export const INITIAL_STATE = Immutable({
  notifications: []
})

// Reducer Functions

const enqueueSnackbar = (state, { notification }) => ({
  ...state,
  notifications: [
    ...state.notifications,
    {
      key: Date.now(),
      ...notification
    }
  ]
})

const removeSnackbar = (state, { key }) => ({
  ...state,
  notifications: state.notifications.filter(
    (notification) => notification !== key
  )
})

// Reducer

export const NotistackReducer = createReducer(INITIAL_STATE, {
  [Types.REMOVE_SNACKBAR]: removeSnackbar,
  [Types.ENQUEUE_SNACKBAR]: enqueueSnackbar
})
