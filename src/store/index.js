import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './ducks'
import sagas from './sagas'
import { __DEV__ } from '../utils/dev'

// Persistor

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Auth'] // only navigation will be persisted
}

const middlewares = []

// Saga

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer()
  )
  : compose(applyMiddleware(...middlewares))

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, composer)
const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { store, persistor }
