import axios from 'axios'
import ioc from '~/lib/ioc'
import { Album, Artist, Music, Playlist } from '~/types/Data'
import { ApiInterface } from '../ApiInterface'
import {
  allAlbums,
  allArtists,
  getAlbum,
  getArtist,
  getMusic,
  getPlaylist,
  getPlaylists,
} from './queries'

export default class GraphqlApi implements ApiInterface {
  private readonly api = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  private query<T>(q: string, variables: Record<string, any> = {}): Promise<T> {
    return this.api
      .post('graphql', { query: q, variables })
      .then((r: any) => r.data.data as T)
  }

  public async getAlbums() {
    const result = await this.query<{ allAlbums: any[] }>(allAlbums)
    return (result?.allAlbums ?? [])
      .map(ioc.use('adapters.album'))
      .map(ioc.use('viewModels.album'))
  }

  public async getArtists() {
    return await this.query<{ allArtists: any[] }>(allArtists)
      .then(result => (result?.allArtists ?? [])
      .map(ioc.use('adapters.artist'))
      .map(ioc.use('viewModels.artist')))
  }

  public async getAlbum(id: string): Promise<Album> {
    const result = await this.query<{ Album: any }>(getAlbum, { id })
    const albumAdapter = ioc.use('adapters.album')
    const albumData = albumAdapter(result?.Album)
    const viewModelBuilder = ioc.use('viewModels.album')
    return viewModelBuilder(albumData)
  }

  public async getArtist(id: string): Promise<Artist> {
    const result = await this.query<{ Artist: any }>(getArtist, { id })
    const adapter = ioc.use('adapters.artist')
    const returnData = adapter(result?.Artist)
    const viewModelBuilder = ioc.use('viewModels.artist')
    return viewModelBuilder(returnData)
  }

  public async getPlaylists(): Promise<Playlist[]> {
    const result = await this.query<{ allPlaylists: any }>(getPlaylists)
    const adapter = ioc.use('adapters.playlist')
    const returnData = (result?.allPlaylists ?? []).map((data: any) =>
      adapter(data)
    )

    const viewModelBuilder = ioc.use('viewModels.playlist')
    return returnData.map(viewModelBuilder)
  }

  public async getMusic(id: string): Promise<Music> {
    const result = await this.query<{ Music: any }>(getMusic, { id })
    const adapter = ioc.use('adapters.music')
    const returnData = adapter(result?.Music)
    const viewModelBuilder = ioc.use('viewModels.music')
    return viewModelBuilder(returnData)
  }

  public async getPlaylist(id: string): Promise<Playlist> {
    const result = await this.query<{ Playlist: any }>(getPlaylist, { id })
    const adapter = ioc.use('adapters.playlist')
    const returnData = adapter(result?.Playlist)

    if (Array.isArray(returnData.music_ids) && returnData.music_ids.length) {
      const musics = await Promise.all(
        returnData.music_ids.map((id) => this.getMusic(id))
      )
      returnData.musics = musics
    }

    const viewModelBuilder = ioc.use('viewModels.playlist')
    return viewModelBuilder(returnData)
  }
}
