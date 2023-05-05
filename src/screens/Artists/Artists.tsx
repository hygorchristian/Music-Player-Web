// @ts-nocheck

import React, { memo, useState } from 'react'
import Header from '~/components/Header'

import { useSelector } from 'react-redux'
import GridArtists from '~/components/GridArtists'
import SearchBar from '~/components/SearchBar'
import { Container } from './styles'

type ArtistsProps = {}

function Artists(props: ArtistsProps) {
  const { headerFixed } = useSelector(({ app }) => app)
  const [albums, setAlbums] = useState([])

  return (
    <Container onContextMenu={(e) => e.preventDefault()}>
      <Header height={210}>
        <div className="head">
          <h1>Artists</h1>
        </div>
        <div className="subhead">
          <h2>Artists</h2>
        </div>
      </Header>
      {headerFixed && <div className="extra-size" />}
      <SearchBar noDownload />
      <GridArtists data={albums} />
    </Container>
  )
}

export default memo(Artists)
