/* eslint-disable no-use-before-define */
import { ReactNode } from 'react'

export type Children = ReactNode | ReactNode[]

type URL = string

export interface Artist {
  id: string
  name: string
  artist_image: URL
  private: number
}

export interface Music {
  id: string
  name: string
  album_id: string
  artist_id: string
  duration: number
}

export interface Album {
  id: string
  cover_image: URL
  name: string
  artist_id: string
  album_duration: number
  year: number
}

export interface Playlist {
  playlist_image: URL
  playlist_duration: number
  music_ids: string[]
}

export type PropertyTypes<Type> = {
  [Key in keyof Type]: Type[Key]
}[keyof Type]
