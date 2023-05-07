import axios from 'axios'
import ioc from '~/lib/ioc'
import { Album, Artist, Playlist } from '~/types/Data'
import { allAlbums, allArtists, getAlbum, getArtist, getPlaylist, getPlaylists } from './queries'

class Api {
  private readonly api = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  private query<T>(q: string, variables: Record<string, any> = {}): Promise<T> {
    return this.api
      .post('graphql', { query: q, variables })
      .then((r) => r.data.data as T)
  }

  public async getAlbums(): Promise<Album[]> {
    const result = await this.query<{ allAlbums: any[] }>(allAlbums)
    const albumAdapter = ioc.use('adapters.album')
    const albumsData = (result?.allAlbums ?? []).map((data: any) =>
      albumAdapter(data)
    )
    const viewModelBuilder = ioc.use('viewModels.album')
    return albumsData.map(viewModelBuilder)
  }

  public async getArtists(): Promise<Artist[]> {
    const result = await this.query<{ allArtists: any[] }>(allArtists)
    const artistAdapter = ioc.use('adapters.artist')
    const artistData = (result?.allArtists ?? []).map((data: any) =>
      artistAdapter(data)
    )
    const viewModelBuilder = ioc.use('viewModels.artist')
    return artistData.map(viewModelBuilder)
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

  public async getPlaylist(id: string): Promise<Playlist> {
    const result = await this.query<{ Playlist: any }>(getPlaylist, { id })
    const adapter = ioc.use('adapters.playlist')
    const returnData = adapter(result?.Playlist)
    const viewModelBuilder = ioc.use('viewModels.playlist')
    return viewModelBuilder(returnData)
  }
}

export default new Api()
