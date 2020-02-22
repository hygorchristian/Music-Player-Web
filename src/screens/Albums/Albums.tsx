// @ts-nocheck

import React, { memo } from 'react'
import Header from '~/components/Header'

import { Container } from './styles'
import { useSelector } from 'react-redux'
import HorizontalScroll from '~/components/HorizontalScroll'

type AlbumsProps = {

}

const recently = [
  {
    id: 1,
    type: 'album',
    cover: 'sds',
    title: 'Hydrograd',
    description: 'Rocketman'
  }
]

function Albums (props: AlbumsProps) {
  const { headerFixed } = useSelector(({ app }) => app)

  return (
    <Container>
      <Header height={210}>
        <div className="head">
          <h1>Albums</h1>
        </div>
        <div className="subhead">
          <h2>Albums</h2>
        </div>
      </Header>
      {headerFixed && <div className="extra-size" />}
      <HorizontalScroll
        title="Recently played"
        data={recently}
      />
      <HorizontalScroll
        title="Similar to Nerdcast"
        data={recently}
      />
      <HorizontalScroll
        title="Jump back in"
        data={recently}
      />
    </Container>
  )
}

export default memo(Albums)
