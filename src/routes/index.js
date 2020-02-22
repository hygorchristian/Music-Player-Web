import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '~/screens/Home'
import Playlist from '~/screens/Playlist'
import Albums from '~/screens/Albums'
import AlbumDetail from '~/screens/AlbumDetail/AlbumDetail'

function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/albums" exact component={Albums} />
      <Route path="/album/:id" exact component={AlbumDetail} />
      <Route path="/playlist/:id" exact component={Playlist} />
    </Switch>
  )
}

export default Routes
