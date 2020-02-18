import React from 'react'

import { Container } from './styles'
import { ReactSVG } from 'react-svg'

type TableProps = {

}

function Table (props: TableProps) {
  return (
    <Container>
      <table>

        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <ReactSVG src="" />
            </th>
            <th></th>
            <th>
              <ReactSVG src="" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="button" align="center">
              <button>
                <ReactSVG src="/icons/play-circle-outline.svg" />
              </button>
            </td>
            <td className="button">
              <ReactSVG src="/" />
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
            <td>
              <span className="date">2019-09-24</span>
            </td>
            <td>
              <ReactSVG src="/" />
            </td>
            <td>
              <span className="time">5:43</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default Table
