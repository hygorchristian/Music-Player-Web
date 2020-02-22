import { useState, useEffect } from 'react'
import firebase, { firestore } from 'firebase'
import config from './firebaseConfig'

firebase.initializeApp(config)

const collections = {
  playlists: firestore().collection('playlists'),
  albums: firestore().collection('albums'),
  artists: firestore().collection('artists'),
  musics: firestore().collection('musics')
}

export function usePlaylists () {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    collections.playlists.onSnapshot(snapshot => {
      const data = []
      snapshot.forEach(doc => {
        const playlist = doc.data()
        data.push(playlist)
      })

      setPlaylists(data)
    })
  }, [])

  return playlists
}

export const getPlaylist = (id, callback) => {
  collections.playlists.doc(id).onSnapshot(async snapshot => {
    const data = snapshot.data()

    const musics = []
    let playlistDuration = 0

    if (data.music_ids) {
      for (const music_id of data.music_ids) {
        const music_doc = await collections.musics.doc(music_id).get()
        const music = music_doc.data()

        musics.push(music)
        playlistDuration += Number(music.duration)
      }
    }

    callback && callback({ ...data, musics, playlistDuration })
  })
}

export const getAlbumCover = (id, callback) => {
  console.log({ id })

  collections.playlists.doc(id).onSnapshot(async snapshot => {
    const album_doc = await collections.albums.doc(id).get()
    const album = album_doc.data()
    callback(album.cover.downloadURL)
  })
}

export const getAlbum = (id, callback) => {
  collections.albums.doc(id).onSnapshot(snapshot => {
    const data = snapshot.data()
    callback(data)
  })
}

export const getArtist = (id, callback) => {
  collections.artists.doc(id).onSnapshot(snapshot => {
    const data = snapshot.data()
    callback(data)
  })
}

export const getAlbumsFilled = (callback) => {
  collections.albums.get().then(async snapshot => {
    const dados = []

    snapshot.forEach(doc => {
      dados.push(doc.data())
    })

    for (const album of dados) {
      const artist_snap = await collections.artists.doc(album.artist_id).get()
      const artist = artist_snap.data()
      album.artist = artist
    }

    console.tron.log({ dados })

    callback(dados)
  })
}

export const getAlbumFilled = (id, callback) => {
  collections.albums.doc(id).onSnapshot(async snapshot => {
    const album = snapshot.data()

    const music_snap = await collections.musics.where('album_id', '==', id).get().catch(e => console.tron.error(e))
    const artist_snap = await collections.artists.doc(album.artist_id).get()

    const dados = []
    let albumDuration = 0

    const artist = artist_snap.data()

    music_snap.forEach(doc => {
      const music = doc.data()
      albumDuration += Number(music.duration)
      dados.push(music)
    })

    album.musics = dados
    album.albumDuration = albumDuration
    album.artist = artist

    console.tron.log({ album })

    callback(album)
  })
}
