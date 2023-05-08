import { faker } from '@faker-js/faker'
import * as AWS from 'aws-sdk'
import ioc from '~/lib/ioc'
import { Album, Artist, Music, Playlist } from '~/types/Data'
import { ApiInterface } from '../ApiInterface'
import data from './data.json'

const random = (min: number, max: number): number =>
  faker.datatype.number({ min, max })

export default class LocalApi implements ApiInterface {
  private readonly s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    region: 'us-west-2', // e.g., 'us-east-1'
  })

  private getAwsSongUrl(filename: string): string {
    const url = this.s3.getSignedUrl('getObject', {
      Bucket: 'musics.hygorchristian',
      Key: filename,
      Expires: 1000,
    })

    return url
  }

  private getMusicById(id: string): Music | undefined {
    const foundItem = data.songs.find((item) => item.id === id)

    if (!foundItem) return

    const artist: Music = {
      id: foundItem.id,
      name: foundItem.name,
      album_id: foundItem.album_id,
      duration: random(240, 600),
      music_url: this.getAwsSongUrl(foundItem.filename),
      is_popular: false,
    }

    return artist
  }

  private getArtistById(id: string): Artist | undefined {
    const foundItem = data.artists.find((item) => item.id === id)

    if (!foundItem) return

    const artist: Artist = {
      id: foundItem.id,
      name: foundItem.name,
      artist_image: foundItem.image,
      private: 0,
    }

    return artist
  }

  private getAlbumById(id: string): Album | undefined {
    const foundItem = data.albums.find((item) => item.id === id)

    if (!foundItem) return

    const album: Album = {
      id: foundItem.id,
      cover_image: foundItem.image,
      name: foundItem.name,
      artist_id: foundItem.artist_id,
      album_duration: random(2000, 5400),
      year: random(1900, 2023),
      musics: [],
    }

    return album
  }

  async getAlbums(): Promise<Album[]> {
    const rawData = data.albums.map((album) => ({
      id: album.id,
      name: album.name,
      cover_image: album.image,
      artist: this.getArtistById(album.artist_id),
    }))

    const albumAdapter = ioc.use('adapters.album')
    const albumsData = rawData.map((data: any) => albumAdapter(data))
    const viewModelBuilder = ioc.use('viewModels.album')
    return albumsData.map(viewModelBuilder)
  }

  async getArtists(): Promise<Artist[]> {
    const rawData = data.artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      artist_image: artist.image,
    }))

    const artistAdapter = ioc.use('adapters.artist')
    const artistData = rawData.map((data: any) => artistAdapter(data))
    const viewModelBuilder = ioc.use('viewModels.artist')
    return artistData.map(viewModelBuilder)
  }

  async getPlaylists(): Promise<Playlist[]> {
    return []
  }

  async getAlbum(id: string): Promise<Album> {
    const album = this.getAlbumById(id)

    if (!album) return {} as Album

    const artist = this.getArtistById(album.artist_id)

    if (!artist) return {} as Album

    const rawData = {
      id: album.id,
      name: album.name,
      cover_image: album.cover_image,
      Artist: this.getArtistById(album.artist_id),
    }

    const musics = data.songs
      .filter((s) => s.album_id === id)
      .map((s) => ({
        ...this.getMusicById(s.id),
        Album: rawData,
        Artist: artist,
      }))
      .filter(Boolean) as Music[]

    const albumAdapter = ioc.use('adapters.album')
    const albumData = albumAdapter({
      ...rawData,
      Music: musics,
    })
    const viewModelBuilder = ioc.use('viewModels.album')

    return viewModelBuilder(albumData)
  }

  async getMusic(id: string): Promise<Music> {
    throw new Error('Method not implemented.')
  }

  async getArtist(id: string): Promise<Artist> {
    const artist = this.getArtistById(id)

    if (!artist) return {} as Artist

    const rawData = {
      id: artist.id,
      name: artist.name,
      artist_image: artist.artist_image,
    }

    const albums = data.albums
      .filter((a) => a.artist_id === id)
      .map((a) => ({
        ...this.getAlbumById(a.id),
        artist: {
          name: rawData.name,
        },
      }))

    const musics = data.songs
      .filter((s) => albums.some((a) => a.id === s.album_id))
      .map((s) => ({
        ...this.getMusicById(s.id),
        Album: {
          id: s.album_id,
          ...albums.find((a) => a.id === s.album_id),
        },
      }))

    // Assign the musics array to the corresponding album
    albums.forEach((album) => {
      // @ts-expect-error
      album.Music = musics.filter((music) => music.album_id === album.id)
    })

    const adapter = ioc.use('adapters.artist')
    const returnData = adapter({
      ...rawData,
      Albums: albums,
    })

    const viewModelBuilder = ioc.use('viewModels.artist')
    return viewModelBuilder(returnData)
  }

  async getPlaylist(id: string): Promise<Playlist> {
    throw new Error('Method not implemented.')
  }
}
