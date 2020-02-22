export const msToTime = (duration) => {
  if (!duration) return null

  let seconds = parseInt((duration / 1000) % 60, 10)
  const minutes = parseInt(((duration / (1000 * 60)) % 60), 10)

  seconds = seconds < 10 ? `0${seconds}` : seconds

  return `${minutes}:${seconds}`
}

export const secondsToHours = (n) => {
  const num = n / 60
  const hours = (num / 60)
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.floor(minutes)
  const seconds = (num % 60 - rminutes) * 60
  const rseconds = Math.floor(seconds)

  if (rhours === 0) {
    return rminutes + ' min ' + rseconds + ' sec'
  }

  return rhours + ' hr ' + rminutes + ' min'
}

export const secondsToMin = (n) => {
  const num = n / 60
  const hours = (num / 60)
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.floor(minutes)
  const seconds = (num % 60 - rminutes) * 60
  const rseconds = Math.floor(seconds)

  if (rhours === 0) {
    return rminutes + ':' + rseconds.toString().padStart(2, '0')
  }

  return rhours + ':' + rminutes.toString().padStart(2, '0') + ':' + rseconds.toString().padStart(2, '0')
}
