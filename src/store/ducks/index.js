import { combineReducers } from 'redux'
import { NotistackReducer as notistack } from '~/components/Notifier/duck'
import { AppReducer as app } from './app'
import { PlayerReducer as player } from './player'

export default combineReducers({
  notistack,
  app,
  player
})
