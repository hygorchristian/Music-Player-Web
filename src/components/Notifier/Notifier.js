import { withSnackbar } from 'notistack'
import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '~/store'
import { NotistackActions } from './duck'

function Notifier({ enqueueSnackbar }) {
  const [displayed, setDisplayed] = useState([])

  const dispatch = useDispatch()
  const notifications = useAppSelector((state) => state.notistack.notifications)

  const updateNotifications = () => {
    notifications.forEach((notification) => {
      setTimeout(() => {
        if (displayed.indexOf(notification.key) > -1) return

        enqueueSnackbar(notification.message, notification.options)

        setDisplayed([...displayed, notification.key])

        dispatch(NotistackActions.removeSnackbar(notification.key))
      }, 1)
    })
  }

  useEffect(() => {
    updateNotifications()
  }, [notifications])

  return null
}

export default withSnackbar(Notifier)
