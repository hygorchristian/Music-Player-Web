import { Artist } from '~/types/Data'
import AlbumViewModel from './AlbumViewModel'
import MusicViewModel from './MusicViewModel'

export default class ArtistViewModel implements Artist {
  readonly id: string

  readonly name: string

  readonly artist_image: string

  readonly private: number

  readonly albums: AlbumViewModel[]

  readonly populars: MusicViewModel[]

  constructor(data: any) {
    this.id = data?.id
    this.artist_image = data?.artist_image
    this.name = data?.name
    this.private = data?.private

    if (Array.isArray(data?.albums)) {
      this.albums = data.albums.map((album: any) => new AlbumViewModel(album))
    } else {
      this.albums = []
    }

    if (Array.isArray(data?.populars)) {
      this.populars = data.populars.map(
        (music: any) => new MusicViewModel(music)
      )
    } else {
      this.populars = []
    }
  }
}
