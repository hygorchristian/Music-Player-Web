export const msToTime = (duration) => {
  if (!duration) return null

  let seconds = parseInt((duration / 1000) % 60, 10)
  const minutes = parseInt(((duration / (1000 * 60)) % 60), 10)

  seconds = seconds < 10 ? `0${seconds}` : seconds

  return `${minutes}:${seconds}`
}
