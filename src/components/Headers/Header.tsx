import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useTabletMode } from '~/hooks'
import { useAppSelector } from '~/store'
import { AppActions } from '~/store/ducks/app'
import Search from './Search'
import { Container } from './styles'

function Header({
  children,
  ...props
}: {
  children: ReactNode[]
  height?: number
}) {
  const dispatch = useDispatch()

  const { scrollTop, headerFixed } = useAppSelector(({ app }) => app)
  const { isTablet } = useTabletMode()
  const [bottom, setBottom] = useState(500)

  const containerEl = useRef(null)

  useEffect(() => {
    // @ts-expect-error
    const bot = containerEl?.current?.getBoundingClientRect?.()?.bottom || 0
    setBottom(bot)

    dispatch(AppActions.setHeaderFixed(bottom <= 116 && scrollTop >= 116))
  }, [scrollTop])

  return (
    <Container
      id="app-header"
      ref={containerEl}
      fixed={headerFixed}
      overlay={scrollTop > 90 ? 1 : scrollTop / 90}
      isTablet={isTablet}
      {...props}
    >
      <div className="gradient" />
      <div className="overlay" />
      <div className="content">
        <div className={`header-info ${headerFixed && 'fixed'}`}>
          {children[0]}
        </div>
        <div className={`subheader-info ${headerFixed && 'fixed'}`}>
          {children[1]}
        </div>
      </div>
      <Search isTablet={isTablet} bgOpacity={scrollTop > 80 ? 1 : 0} />
    </Container>
  )
}

export default Header
