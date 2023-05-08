/* eslint-disable no-use-before-define */
import { ReactNode } from 'react'
import * as z from 'zod'

export type Children = ReactNode | ReactNode[]

type URL = string

export interface Artist {
  id: string
  name: string
  artist_image: URL
  private: number
  albums?: Album[]
  populars?: Music[]
}

export interface Music {
  id: string
  name: string
  album_id: string
  // artist_id: string
  duration: number
  album?: Album
  music_url: URL
  is_popular: boolean
}

export interface Album {
  id: string
  cover_image: URL
  name: string
  artist_id: string
  album_duration: number
  year: number
  musics: Music[]
  artist?: Artist
}

export interface Playlist {
  id: string
  playlist_image: URL
  playlist_duration: number
  music_ids: string[]
  musics: Music[]
  name: string
  creator: string
}

export type PropertyTypes<Type> = {
  [Key in keyof Type]: Type[Key]
}[keyof Type]

export const musicSchema = z.object({
  id: z.string(),
  name: z.string(),
  album_id: z.string().optional(),
  duration: z.number().positive().optional(),
})

export const albumSchema = z.object({
  id: z.string(),
  cover_image: z.string().url(),
  name: z.string(),
  artist_id: z.string().optional(),
  album_duration: z.number().positive().optional(),
  year: z.number().positive().optional(),
  musics: z.array(musicSchema).optional(),
})
