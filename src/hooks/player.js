import { useEffect, useState } from 'react'
import { useAppSelector } from '~/store'
import { msToTime } from '~/utils/time'

export function usePlayer() {
  const {
    position: _position,
    duration: _duration,
    positionShown: _positionShown,
  } = useAppSelector(({ player }) => player)
  const [position, setPosition] = useState(msToTime(_position))
  const [duration, setDuration] = useState(_duration)
  const [positionShown, setPositionShown] = useState(_positionShown)
  const [progress, setProgress] = useState(
    parseInt((_positionShown || _position) * (1000 / _duration), 10) || 0
  )

  useEffect(() => {
    setPosition(msToTime(_position))
    setDuration(msToTime(_duration))
    setPositionShown(msToTime(_positionShown))
    setProgress(
      parseInt((_positionShown || _position) * (1000 / _duration), 10) || 0
    )
  }, [_position, _duration, _positionShown])

  return { position, duration, positionShown, progress }
}
