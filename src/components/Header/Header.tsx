// @ts-nocheck

import React, { useEffect, useState, useRef } from 'react'
import { Container, SearchContainer, Fixed } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'

type HeaderProps = {

}

function Search (props) {
  return (
    <SearchContainer {...props}>
      search
    </SearchContainer>
  )
}

function Header (props: HeaderProps) {
  const dispatch = useDispatch()

  const { scrollTop, headerFixed } = useSelector(({ app }) => app)
  const [bottom, setBottom] = useState(500)

  const containerEl = useRef(null)

  useEffect(() => {
    const bot = containerEl.current && containerEl.current.getBoundingClientRect().bottom
    // console.log(bot)
    setBottom(bot)

    dispatch(AppActions.setHeaderFixed(bottom <= 116 && scrollTop >= 116))
  }, [scrollTop])

  return (
    <Container
      ref={containerEl}
      fixed={headerFixed}
      overlay={scrollTop > 90 ? 1 : scrollTop / 90}
    >
      <div className="gradient" />
      <div className="overlay" />
      <div className="content">
        <div className={`header-info ${headerFixed && 'fixed'}`}>
          <h3>Home</h3>
        </div>
        <div className={`subheader-info ${headerFixed && 'fixed'}`}>
          <h4>Home</h4>
        </div>
      </div>
      <Search bgOpacity={scrollTop > 80 ? 1 : 0} />
    </Container>
  )
}

export default Header
