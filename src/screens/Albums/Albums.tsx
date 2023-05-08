import React, { memo } from 'react'
import { useQuery } from 'react-query'
import GridItems from '~/components/GridItems'
import Header from '~/components/Headers'
import SearchBar from '~/components/SearchBar'
import api from '~/services/api'
import { useAppSelector } from '~/store'
import { Container } from './styles'

function Albums() {
  const { headerFixed } = useAppSelector(({ app }) => app)
  const { data: albums, isLoading } = useQuery('albums', () => api.getAlbums())

  if (isLoading || !albums) return <div>loading...</div>

  return (
    <Container onContextMenu={(e: MouseEvent) => e.preventDefault()}>
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
      <GridItems albums={albums} />
    </Container>
  )
}

export default memo(Albums)
