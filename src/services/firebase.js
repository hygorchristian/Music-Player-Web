import { useState, useEffect } from 'react'
import firebase, { firestore } from 'firebase'
import config from './firebaseConfig'

firebase.initializeApp(config)

const data = {
  playlists: firestore().collection('playlists'),
  albums: firestore().collection('albums'),
  artists: firestore().collection('artists'),
  musics: firestore().collection('musics')
}

export function usePlaylists () {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    data.playlists.onSnapshot(snapshot => {
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
