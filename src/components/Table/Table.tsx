// @ts-nocheck

import React, { useState, useRef, useEffect } from 'react'

import { Container } from './styles'
import Spoticon from '~/components/Spoticon/Spoticon'
import { useSelector } from 'react-redux'

type TableProps = {

}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]

function Table (props: TableProps) {
  const [fav, setFav] = useState(false)
  const [top, setTop] = useState(0)
  const { scrollTop } = useSelector(({ app }) => app)
  const table = useRef(null)

  useEffect(() => {
    const _top = table.current && table.current.getBoundingClientRect().top
    setTop(_top)
  }, [scrollTop])

  return (
    <Container>
      <table id={top <= 116 ? 'fixed' : 'hidden'}>
        <thead id="playlist-table-head">
          <tr>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 44 }}></th>
            <th>Title</th>
            <th style={{ width: 300 }}>Artist</th>
            <th style={{ width: 320 }}>Album</th>
            <th style={{ width: 110 }}>
              <Spoticon name="calendar" size={16} />
            </th>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 60 }}>
              <Spoticon name="clock" size={16} />
            </th>
          </tr>
        </thead>
      </table>
      <table id="playlist-table" ref={table}>
        <thead>
          <tr>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 44 }}></th>
            <th>Title</th>
            <th style={{ width: 300 }}>Artist</th>
            <th style={{ width: 320 }}>Album</th>
            <th style={{ width: 110 }}>
              <Spoticon name="calendar" size={16} />
            </th>
            <th style={{ width: 52 }}></th>
            <th style={{ width: 60 }}>
              <Spoticon name="clock" size={16} />
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr>
              <td className="button" align="center">
                <button className="control-button outlined">
                  <Spoticon name="play" color="#ffffff" size={14} />
                </button>
              </td>
              <td className="button" align="center" onClick={() => setFav(!fav)}>
                {fav ? (
                  <Spoticon name="heart-solid" color="#ffffff" size={16} style={{ lineHeight: '40px' }} />
                ) : (
                  <Spoticon name="heart" color="#ffffff" size={16} style={{ lineHeight: '40px' }} />
                )}
              </td>
              <td>
                <span className="title">Nikita</span>
              </td>
              <td>
                <span className="artist">Elton John</span>
              </td>
              <td>
                <span className="album">Ice On Fire</span>
              </td>
              <td align="right">
                <span className="date">2019-09-24</span>
              </td>
              <td className="button" align="center">
                <button className="control-button">
                  <Spoticon name="dots-h" color="#ffffff" size={24} />
                </button>
              </td>
              <td align="right">
                <span className="time">5:43</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Table
