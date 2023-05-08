import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AlbumDetail from '~/screens/AlbumDetail'
import Albums from '~/screens/Albums'
import ArtistDetail from '~/screens/ArtistDetail'
import Artists from '~/screens/Artists'
import Playlist from '~/screens/Playlist'

function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={Albums} />
      <Route path="/albums" exact component={Albums} />
      <Route path="/album/:id" exact component={AlbumDetail} />
      <Route path="/artists" exact component={Artists} />
      <Route path="/artist/:id" exact component={ArtistDetail} />
      <Route path="/playlist/:id" exact component={Playlist} />
    </Switch>
  )
}

export default Routes
