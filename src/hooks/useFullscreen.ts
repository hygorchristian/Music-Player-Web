import { useEffect, useState } from 'react'

function useFullscreenStatus() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleFullscreenChange = () => {
    if (
      document.fullscreenElement ||
      // @ts-expect-error
      document.webkitFullscreenElement ||
      // @ts-expect-error
      document.mozFullScreenElement ||
      // @ts-expect-error
      document.msFullscreenElement
    ) {
      setIsFullscreen(true)
    } else {
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener(
        'webkitfullscreenchange',
        handleFullscreenChange
      )
      document.removeEventListener(
        'mozfullscreenchange',
        handleFullscreenChange
      )
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  return isFullscreen
}

export default useFullscreenStatus
