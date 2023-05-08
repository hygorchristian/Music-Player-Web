import React, { memo } from 'react'
import Header from '~/components/Headers'

import { useQuery } from 'react-query'
import GridArtists from '~/components/GridArtists'
import SearchBar from '~/components/SearchBar'
import api from '~/services/api'
import { useAppSelector } from '~/store'
import { Container } from './styles'

type ArtistsProps = {}

function Artists(props: ArtistsProps) {
  const { headerFixed } = useAppSelector(({ app }) => app)
  const { data: artists, isLoading } = useQuery('artists', () =>
    api.getArtists()
  )

  if (isLoading || !artists) return null

  return (
    <Container onContextMenu={(e: any) => e.preventDefault()}>
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
      <GridArtists data={artists} />
    </Container>
  )
}

export default memo(Artists)
