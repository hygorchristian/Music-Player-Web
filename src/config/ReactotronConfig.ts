import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

declare global {
  interface Console {
    tron: any
  }
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    // @ts-ignore
    .use(sagaPlugin())
    .connect()

  console.tron = tron
  // @ts-ignore
  tron.clear()
} else {
  console.tron = console
}
