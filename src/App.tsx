import './config/ReactotronConfig'

import { green, red } from '@material-ui/core/colors'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Main from '~/screens/Main'

import { QueryClient, QueryClientProvider } from 'react-query'
import Notifier from '~/components/Notifier'
import { persistor, store } from './store'
import Global from './styles/global'

const snackbarProviderOptions = {
  vertical: 'top',
  horizontal: 'right',
}

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: red,
    error: red,
    background: {
      paper: '#282828',
    },
    action: {
      hover: '#404040',
    },
    divider: '#404040',
  },
  typography: {
    /* @ts-expect-error */
    fontFamily: ['proxima-nova', 'Montserrat'],
  },
})

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      {/* @ts-expect-error */}
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        {/* @ts-expect-error */}
        <SnackbarProvider
          maxSnack={4} /* anchorOrigin={snackbarProviderOptions} */
        >
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                {/* @ts-expect-error */}
                <Notifier />
                <Main />
              </BrowserRouter>
            </ThemeProvider>
          </QueryClientProvider>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
