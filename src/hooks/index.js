import { useEffect, useLayoutEffect, useState } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

export function useScrollProps() {
  const [props, setProps] = useState({ top: 0 })

  useEffect(() => {
    const elem = document.getElementById('main-scroll')

    if (!elem) return

    elem.onscroll((e) => {
      // console.log(e)
    })
    setProps({ top: elem.offsetTop })
  }, [])

  return props
}

export function useTabletMode() {
  const { width } = useWindowSize()
  const [props, setProps] = useState({ isTablet: width < 1190 })

  useEffect(() => {
    setProps({ isTablet: width < 1190 })
  }, [width])

  return props
}
