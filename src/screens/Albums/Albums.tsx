// @ts-nocheck

import React, { memo, useState, useEffect } from 'react'
import Header from '~/components/Header'

import { Container } from './styles'
import { useSelector } from 'react-redux'
import GridItems from '~/components/GridItems'
import SearchBar from '~/components/SearchBar'
import { getAlbumsFilled } from '~/services/firebase'

type AlbumsProps = {

}

function Albums (props: AlbumsProps) {
  const { headerFixed } = useSelector(({ app }) => app)
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbumsFilled(data => {
      setAlbums(data)
    })
  }, [])

  return (
    <Container onContextMenu={e => e.preventDefault()}>
      <Header height={210}>
        <div className="head">
          <h1>Albums</h1>
        </div>
        <div className="subhead">
          <h2>Albums</h2>
        </div>
      </Header>
      {headerFixed && <div className="extra-size" />}
      <SearchBar noDownload />
      <GridItems data={albums} />
    </Container>
  )
}

export default memo(Albums)
