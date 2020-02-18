// @ts-nocheck

import React, { useEffect, useState, useRef } from 'react'
import { Container, SearchContainer, Fixed } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppActions } from '~/store/ducks/app'
import { ReactSVG } from 'react-svg'
import { useTabletMode, useWindowSize } from '~/hooks'
import Spoticon from '~/components/Spoticon/Spoticon'

type HeaderProps = {

}

function Search (props) {
  const { width } = useWindowSize()
  const { isTablet } = useTabletMode()

  const [value, setValue] = useState('')
  const [headerWidth, setHeaderWidth] = useState(isTablet ? width - 200 : width - 456)

  const handleChange = (e: React.ChangeEvent) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  useEffect(() => {
    const newVal = isTablet ? width - 200 : width - 456
    setHeaderWidth(newVal)
  }, [width])

  return (
    <SearchContainer width={headerWidth} {...props} >
      <div className="search-control">
        <button style={{ marginRight: 8 }}>
          <Spoticon name="chevron-left-solid" size={16} />
          {/* <ReactSVG src="/icons/spotify/chevron-left.svg" /> */}
        </button>
        <button>
          <Spoticon name="chevron-right-solid" size={16} />
          {/* <ReactSVG src="/icons/spotify/chevron-right.svg" /> */}
        </button>
        <div className="search-input">
          <Spoticon name="search" color="#C8C8C8" size={16} />
          <input
            placeholder="Search"
            value={value}
            onChange={handleChange}
          />
          {(value && value.length > 0) && (
            <button onClick={() => setValue('')}>
              <Spoticon name="close" size={16} color="black" />
            </button>
          )}
        </div>
      </div>
      <div className="user-control">
        <div className="user-info">
          <Spoticon name="user" color="white" size={24} />
          <div className="username">
            <span>rushy06</span>
          </div>
        </div>
        <button>
          <Spoticon name="chevron-down-solid" color="white" size={16} />
        </button>
      </div>
    </SearchContainer>
  )
}

function Header ({ children, ...props }: HeaderProps) {
  const dispatch = useDispatch()

  const { scrollTop, headerFixed } = useSelector(({ app }) => app)
  const { isTablet } = useTabletMode()
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
      <Search
        isTablet={isTablet}
        bgOpacity={scrollTop > 80 ? 1 : 0}
      />
    </Container>
  )
}

export default Header
