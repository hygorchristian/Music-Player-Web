import ioc from '~/lib/ioc'
import AlbumAdapter from './AlbumAdapter'
import ArtistAdapter from './ArtistAdapter'
import MusicAdapter from './MusicAdapter'
import PlaylistAdapter from './PlaylistAdapter'

export const bindDefaultAdapters = () => {
  ioc.singleton('adapters.music', () => MusicAdapter)
  ioc.singleton('adapters.album', () => AlbumAdapter)
  ioc.singleton('adapters.artist', () => ArtistAdapter)
  ioc.singleton('adapters.playlist', () => PlaylistAdapter)
}
