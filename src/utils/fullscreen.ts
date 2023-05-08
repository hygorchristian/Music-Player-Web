// @ts-nocheck
export default function toggleFullscreen() {
  const doc = document.documentElement

  const isNotFullScreen =
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement

  // Check if the page is not in fullscreen mode
  if (isNotFullScreen) {
    // Request fullscreen mode
    if (doc.requestFullscreen) {
      doc.requestFullscreen()
    } else if (doc.mozRequestFullScreen) {
      doc.mozRequestFullScreen()
    } else if (doc.webkitRequestFullscreen) {
      doc.webkitRequestFullscreen()
    } else if (doc.msRequestFullscreen) {
      doc.msRequestFullscreen()
    }
  } else {
    // Exit fullscreen mode
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }
}
