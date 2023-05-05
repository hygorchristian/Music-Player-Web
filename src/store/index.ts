import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { __DEV__ } from '../utils/dev'
import reducers from './ducks'
import sagas from './sagas'

// Persistor

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Auth'], // only navigation will be persisted
}

const middlewares = []

// Saga

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares))

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, composer)
const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { store, persistor }

export type RootState = ReturnType<typeof persistedReducer>
