import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTabletMode, useWindowSize } from '~/hooks'
import Spoticon from '../Spoticon'
import { SearchContainer } from './styles'

export default function Search(props: {
  isTablet: boolean
  bgOpacity: number
}) {
  const { width } = useWindowSize()
  const { isTablet } = useTabletMode()
  const history = useHistory()

  const [value, setValue] = useState('')
  const [headerWidth, setHeaderWidth] = useState(
    isTablet ? width - 200 : width - 456
  )

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  const handleBack = () => {
    history.goBack()
  }

  useEffect(() => {
    const newVal = isTablet ? width - 200 : width - 456
    setHeaderWidth(newVal)
  }, [width])

  return (
    <SearchContainer width={headerWidth} {...props}>
      <div className="search-control">
        <button style={{ marginRight: 8 }} onClick={handleBack}>
          <Spoticon name="chevron-left-solid" size={16} />
        </button>
        <button>
          <Spoticon name="chevron-right-solid" size={16} />
        </button>
        <div className="search-input">
          <Spoticon name="search" color="#C8C8C8" size={16} />
          <input placeholder="Search" value={value} onChange={handleChange} />
          {value && value.length > 0 && (
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
            <span>hygorchristian</span>
          </div>
        </div>
        <button>
          <Spoticon name="chevron-down-solid" color="white" size={16} />
        </button>
      </div>
    </SearchContainer>
  )
}
