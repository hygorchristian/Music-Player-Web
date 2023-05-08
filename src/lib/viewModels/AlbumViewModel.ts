import { Album } from '~/types/Data'
import ArtistViewModel from './ArtistViewModel'
import MusicViewModel from './MusicViewModel'

export default class AlbumViewModel implements Album {
  readonly id: string

  readonly cover_image: string

  readonly name: string

  readonly artist_id: string

  readonly album_duration: number

  readonly year: number

  readonly musics: MusicViewModel[]

  readonly artist?: ArtistViewModel

  constructor(data: any) {
    this.id = data?.id
    this.cover_image = data?.cover_image
    this.name = data?.name
    this.artist_id = data?.artist_id
    this.album_duration = data?.album_duration

    this.year = data?.year

    if (Array.isArray(data?.musics)) {
      this.musics = data.musics.map((m: any) => new MusicViewModel(m))
    } else {
      this.musics = []
    }

    if (data?.artist) {
      this.artist = new ArtistViewModel(data.artist)
    }
  }
}
