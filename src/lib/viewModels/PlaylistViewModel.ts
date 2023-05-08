import { Playlist } from '~/types/Data'
import MusicViewModel from './MusicViewModel'

export default class PlaylistViewModel implements Playlist {
  id: string
  name: string
  playlist_image: string
  playlist_duration: number
  music_ids: string[]
  creator: string

  musics: MusicViewModel[]

  constructor(data: any) {
    this.id = data?.id
    this.name = data?.name
    this.creator = data?.creator
    this.playlist_image = data?.playlist_image
    this.playlist_image = data?.playlist_image
    this.playlist_duration = data?.playlist_duration
    this.music_ids = data?.music_ids ?? []

    if (Array.isArray(data?.musics)) {
      this.musics = data.musics.map((music: any) => new MusicViewModel(music))
    } else {
      this.musics = []
    }
  }
}
