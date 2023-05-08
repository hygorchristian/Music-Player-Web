type URL = string

export interface Artist {
  id: string
  name: string
  artist_image: URL
  private: number
  albums?: Album[]
  populars?: Music[]
}

export interface Music {
  id: string
  name: string
  duration: number
  album?: Album
  music_url: URL
  is_popular: boolean
}

export interface Album {
  id: string
  cover_image: URL
  name: string
  album_duration: number
  year: number
  musics: Music[]
  artist?: Artist
}

export interface Playlist {
  id: string
  playlist_image: URL
  playlist_duration: number
  musics: Music[]
  name: string
  creator: string
}
