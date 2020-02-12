import { store } from '~/store'
import { NotistackActions } from './duck'

export const showSuccessMessage = (message) => {
  store.dispatch(NotistackActions.enqueueSnackbar({
    message,
    options: {
      variant: 'success'
    }
  }))
}

export const showWarningMessage = (message) => {
  store.dispatch(NotistackActions.enqueueSnackbar({
    message,
    options: {
      variant: 'warning'
    }
  }))
}

export const showErrorMessage = (message) => {
  store.dispatch(NotistackActions.enqueueSnackbar({
    message,
    options: {
      variant: 'error'
    }
  }))
}
