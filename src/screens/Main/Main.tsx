import React from 'react'

import Navbar from '~/components/Navbar'
import Playbar from '~/components/Playbar'
import FindFriends from '~/components/FindFriends'
import Routes from '~/routes'

import { Container, Content } from './styles'

type MainProps = {

}

function Main (props: MainProps) {
  return (
    <Container>
      <div className="top">
        <Navbar/>
        <Content>
          <Routes />
        </Content>
        <FindFriends/>
      </div>
      <div className="bottom">
        <Playbar/>
      </div>
    </Container>
  )
}

export default Main
