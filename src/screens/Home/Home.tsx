// @ts-nocheck

import React from 'react'
import Header from '~/components/Headers'
import HorizontalScroll from '~/components/HorizontalScroll'
import { useAppSelector } from '~/store'
import { Container } from './styles'

type HomeProps = {}

const recently = [
  {
    id: 1,
    type: 'album',
    cover: 'sds',
    title: 'Hydrograd',
    description: 'Rocketman',
  },
]

function Home(props: HomeProps) {
  const { headerFixed } = useAppSelector(({ app }) => app)

  return (
    <Container>
      <Header height={240}>
        <div className="head">
          <h1>Home</h1>
        </div>
        <div className="subhead">
          <h2>Home</h2>
        </div>
      </Header>
      {headerFixed && <div className="extra-size" />}
      <HorizontalScroll title="Recently played" data={recently} />
      <HorizontalScroll title="Similar to Nerdcast" data={recently} />
      <HorizontalScroll title="Jump back in" data={recently} />
    </Container>
  )
}

export default Home
