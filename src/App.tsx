// @ts-nocheck
import './config/ReactotronConfig'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { PersistGate } from 'redux-persist/integration/react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'

import { store, persistor } from './store'
import Routes from './routes'
import Global from './styles/global'
import Notifier from '~/components/Notifier'

const snackbarProviderOptions = {
  vertical: 'top',
  horizontal: 'right'
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: red,
    error: red,
    background: {
      paper: '#282828'
    },
    action: {
      hover: '#404040'
    },
    divider: '#404040'
  },
  typography: {
    fontFamily: [
      'proxima-nova',
      'Montserrat'
    ]
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <SnackbarProvider maxSnack={4} /* anchorOrigin={snackbarProviderOptions} */>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Notifier />
              <Routes />
            </BrowserRouter>
          </ThemeProvider>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
