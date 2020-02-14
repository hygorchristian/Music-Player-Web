import { combineReducers } from 'redux'
import { NotistackReducer as notistack } from '~/components/Notifier/duck'
import { AppReducer as app } from './app'

export default combineReducers({
  notistack,
  app
})
