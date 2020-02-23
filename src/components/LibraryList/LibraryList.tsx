// @ts-nocheck

import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, ItemContainer } from './styles'
import { AppActions } from '~/store/ducks/app'
import { useDispatch, useSelector } from 'react-redux'

type LibraryListProps = {

}

type ItemLibraryProps = {
  label: String,
  selected: Boolean,
}

function ItemLibrary ({ label, selected, ...props }: ItemLibraryProps) {
  return (
    <ItemContainer className={selected && 'selected'} {...props}>
      {selected && <div className="indicator" />}
      <span>{label}</span>
    </ItemContainer>
  )
}

function LibraryList (props: LibraryListProps) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { menuSelected } = useSelector(({ app }) => app)

  const selectMenu = (name) => {
    dispatch(AppActions.setMenuSelected(name))
  }

  return (
    <Container>
      <h2>Your Library</h2>
      <ul>
        <ItemLibrary
          onClick={() => selectMenu('made-for-you')}
          selected={menuSelected === 'made-for-you'}
          label="Made For You"
        />
        <ItemLibrary
          onClick={() => selectMenu('recently-played')}
          selected={menuSelected === 'recently-played'}
          label="Recently Played"
        />
        <ItemLibrary
          onClick={() => selectMenu('liked-songs')}
          selected={menuSelected === 'liked-songs'}
          label="Liked Songs"
        />
        <ItemLibrary
          onClick={() => {
            selectMenu('albums')
            history.push('/albums')
          }}
          selected={menuSelected === 'albums'}
          label="Albums"
        />
        <ItemLibrary
          onClick={() => {
            selectMenu('artists')
            history.push('/artists')
          }}
          selected={menuSelected === 'artists'}
          label="Artists"
        />
        <ItemLibrary
          onClick={() => selectMenu('podcasts')}
          selected={menuSelected === 'podcasts'}
          label="Podcasts"
        />
      </ul>
    </Container>
  )
}

export default LibraryList
