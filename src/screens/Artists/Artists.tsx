// @ts-nocheck

import React, { memo, useState, useEffect } from 'react'
import Header from '~/components/Header'

import { Container } from './styles'
import { useSelector } from 'react-redux'
import GridItems from '~/components/GridItems'
import SearchBar from '~/components/SearchBar'
import { getArtists } from '~/services/firebase'
import GridArtists from '~/components/GridArtists'

type ArtistsProps = {

}

function Artists (props: ArtistsProps) {
  const { headerFixed } = useSelector(({ app }) => app)
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getArtists(data => {
      setAlbums(data)
    })
  }, [])

  return (
    <Container onContextMenu={e => e.preventDefault()}>
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
