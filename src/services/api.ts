import axios from 'axios'
import { Album } from '~/types/Data'

class Api {
  private readonly api = axios.create({
    baseURL: 'http://localhost:9393',
  })

  public async getAlbums(): Promise<Album[]> {
    const result = await this.api.get<Album[]>('/albums')
    return result.data
  }

  public async getAlbum(id: string): Promise<Album> {
    const result = await this.api.get<Album>(`/albums/${id}`)
    return result.data
  }
}

export default new Api()
