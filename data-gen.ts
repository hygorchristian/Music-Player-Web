/* eslint-disable no-unused-vars */
import { faker } from '@faker-js/faker'
import fs from 'fs'
import { Album, Artist, Music, Playlist } from './src/types/Data'

const random = (min: number, max: number): number => {
  return faker.datatype.number({ min, max })
}

const randomImg = () => faker.image.imageUrl(undefined, undefined, 'dog', true)

const createMany = <T>(
  quantity: number,
  callback: (index: number) => T
): T[] => {
  const items: T[] = []

  for (let i = 0; i < quantity; i++) {
    items.push(callback(i))
  }

  return items
}

const createMusic = (album: Album): Music => {
  return {
    id: faker.lorem.slug(),
    name: faker.commerce.productName(),
    duration: random(100, 600),
    album_id: album.id,
    artist_id: album.artist_id,
  }
}

const createAlbum = (artist: Artist): Album => {
  return {
    id: faker.lorem.slug(),
    cover_image: randomImg(),
    artist_id: artist.id,
    album_duration: random(1000, 6000),
    name: faker.commerce.productName(),
    year: faker.date
      .between('1930-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z')
      .getFullYear(),
  }
}

const createArtist = (): Artist => {
  return {
    id: faker.lorem.slug(),
    private: faker.datatype.number(1),
    name: faker.company.name(),
    artist_image: randomImg(),
  }
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

function createPlaylists(
  musics: Music[],
  numPlaylists: number,
  minMusicsPerPlaylist: number,
  maxMusicsPerPlaylist: number
): Playlist[] {
  const playlists: Playlist[] = []

  // Shuffle the musics array
  const shuffledMusics = shuffle([...musics])

  // Distribute the musics into playlists
  for (let i = 0; i < numPlaylists; i++) {
    const playlistDuration = 0
    const musicIds: string[] = []

    // Randomly select the number of musics in the playlist
    const numMusicsInPlaylist = random(
      minMusicsPerPlaylist,
      maxMusicsPerPlaylist
    )

    for (let j = 0; j < numMusicsInPlaylist && shuffledMusics.length > 0; j++) {
      const music = shuffledMusics.pop()
      if (music) {
        musicIds.push(music.id)
      }
    }

    playlists.push({
      playlist_image: randomImg(),
      playlist_duration: random(4000, 10000), // You can calculate the duration based on the music lengths
      music_ids: musicIds,
    })
  }

  return playlists
}

const writeFile = (data: any) =>
  fs.writeFileSync('./db.js', `module.exports = ${JSON.stringify(data)}`)

const generateAndSave = async () => {
  const artists = createMany(random(10, 20), () => createArtist())

  const albums = artists.reduce((acum: Album[], artist) => {
    const created = createMany(random(10, 20), () => createAlbum(artist))
    acum.push(...created)
    return acum
  }, [])

  const musics = albums.reduce((acum: Music[], album) => {
    const created = createMany(random(10, 20), () => createMusic(album))
    acum.push(...created)
    return acum
  }, [])

  const playlists = createPlaylists(
    musics,
    random(5, 10),
    random(10, 20),
    random(20, 30)
  )

  const data = {
    artists,
    // albums,
    // musics,
    // playlists,
  }

  writeFile(data)
}
