export const getPlaylists = `
query {
  allPlaylists {
    id
    name
  }
}
`

export const getPlaylist = `
query GetPlaylists($id: ID!) {
  Playlist (id: $id)  {
    id
    name
    playlist_image
    music_ids
  }
}
`

export const allAlbums = `
query {
  allAlbums {
    id
    name
    artist: Artist{
      name
    }
    cover_image
  }
}
`

export const allArtists = `
query {
  allArtists {
    id
    name
    artist_image
  }
}
`

export const getAlbum = `
query GetAlbum($id: ID!) {
  Album (id: $id)  {
    id
    name
    artist: Artist{
      name
    }
    cover_image
    Music {
      id
      name
      duration
      album_id
      music_url
      Album {
        id
        name
        cover_image
        Artist {
          id
          name
        }
      }
    }
  }
}
`

export const getMusic = `
query GetMusic($id: ID!) {
  Music (id: $id)  {
    id
    name
    duration
    album_id
    music_url
    Album {
      id
      name
      cover_image
      Artist {
        id
        name
      }
    }
  }
}
`

export const getArtist = `
query GetArtist($id: ID!) {
  Artist (id: $id)  {
    id
    name
    artist_image
    Albums {
      id
      name
      artist: Artist{
        name
      }
      cover_image
      Music {
        id
        name
        duration
        album_id
        music_url
        is_popular
        Album {
          id
          name
          cover_image
          Artist {
            id
            name
          }
        }
      }
    }
  }
}
`
