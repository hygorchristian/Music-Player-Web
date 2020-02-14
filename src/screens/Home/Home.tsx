// @ts-nocheck

import React from 'react'
import Header from '~/components/Header'

import { Container } from './styles'
import { lorem } from '~/utils/dev'
import { useSelector } from 'react-redux'

type HomeProps = {

}

function Home (props: HomeProps) {
  const { headerFixed } = useSelector(({ app }) => app)

  return (
    <Container>
      <Header />
      {headerFixed && <div className="extra-size" />}
      <div className="fake-content">
        <p style={{ color: '#ffa5a5' }}>{lorem.large}</p>
        <p style={{ color: '#ffdb9a' }}>{lorem.large}</p>
        <p style={{ color: '#abff94' }}>{lorem.large}</p>
        <p style={{ color: '#a3e0ff' }}>{lorem.large}</p>
      </div>
    </Container>
  )
}

export default Home
