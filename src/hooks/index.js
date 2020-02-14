import { useState, useEffect } from 'react'

export function useScrollProps () {
  const [props, setProps] = useState({ top: 0 })

  useEffect(() => {
    const elem = document.getElementById('main-scroll')

    if (!elem) return

    elem.onscroll(e => {
      console.log(e)
    })
    setProps({ top: elem.offsetTop })
  }, [])

  return props
}
