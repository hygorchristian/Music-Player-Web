// @ts-nocheck

import React, { useEffect, useState, useRef } from 'react'
import { Container, SearchContainer, Fixed } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'
import { ReactSVG } from 'react-svg'
import { useTabletMode, useWindowSize } from '~/hooks'

type HeaderProps = {

}

function Search (props) {
  const { width } = useWindowSize()
  const { isTablet } = useTabletMode()

  console.log({ width })

  const [value, setValue] = useState('')
  const [headerWidth, setHeaderWidth] = useState(width - 456)

  const handleChange = (e: React.ChangeEvent) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  useEffect(() => {
    const newVal = isTablet ? width - 200 : width - 456
    setHeaderWidth(newVal)
  }, [width])

  return (
    <SearchContainer {...props} width={headerWidth}>
      <div className="search-control">
        <button style={{ marginRight: 8 }}>
          <ReactSVG src="/icons/spotify/chevron-left.svg" />
        </button>
        <button>
          <ReactSVG src="/icons/spotify/chevron-right.svg" />
        </button>
        <div className="search-input">
          <ReactSVG src="/icons/spotify/search.svg" />
          <input
            placeholder="Search"
            value={value}
            onChange={handleChange}
          />
          {(value && value.length > 0) && (
            <button onClick={() => setValue('')}>
              <ReactSVG src="/icons/spotify/x.svg" />
            </button>
          )}
        </div>
      </div>
      <div className="user-control">
        <div className="user-info">
          <ReactSVG src="/icons/spotify/user.svg" />
          <div className="username">
            <span>rushy06</span>
          </div>
        </div>
        <button>
          <ReactSVG src="/icons/spotify/chevron-down.svg" />
        </button>
      </div>
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
