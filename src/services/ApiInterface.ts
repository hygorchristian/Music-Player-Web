import { Album, Artist, Music, Playlist } from '~/types/Data'

export interface ApiInterface {
  getAlbums(): Promise<Album[]>
  getArtists(): Promise<Artist[]>
  getPlaylists(): Promise<Playlist[]>

  getAlbum(id: string): Promise<Album>
  getMusic(id: string): Promise<Music>
  getArtist(id: string): Promise<Artist>
  getPlaylist(id: string): Promise<Playlist>
}
