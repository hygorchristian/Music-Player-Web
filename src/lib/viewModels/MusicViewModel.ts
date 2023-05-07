import { Album, Artist, Music } from '~/types/Data'
import AlbumViewModel from './AlbumViewModel'
import ArtistViewModel from './ArtistViewModel'

export default class MusicViewModel implements Music {
  readonly id: string

  readonly name: string

  readonly album_id: string

  readonly duration: number

  readonly music_url: string

  readonly is_popular: boolean

  readonly album?: Album

  readonly artist?: Artist

  constructor(data: any) {
    this.id = data?.id
    this.name = data?.name
    this.album_id = data?.album_id
    this.duration = data?.duration
    this.music_url = data?.music_url
    this.is_popular = data?.is_popular

    if (data?.album) {
      this.album = new AlbumViewModel(data.album)
    }

    if (data?.artist) {
      this.artist = new ArtistViewModel(data.artist)
    }
  }
}
