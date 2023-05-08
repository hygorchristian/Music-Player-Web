import ioc from '~/lib/ioc'
import AlbumViewModel from './AlbumViewModel'
import ArtistViewModel from './ArtistViewModel'
import MusicViewModel from './MusicViewModel'
import PlaylistViewModel from './PlaylistViewModel'

export type ViewModelBuilder<ViewModel extends any = any> = (
  data: any
) => ViewModel

export const bindDefaultViewModels = () => {
  ioc.singleton(
    'viewModels.music',
    () => (data: any) => new MusicViewModel(data)
  )
  ioc.singleton(
    'viewModels.album',
    () => (data: any) => new AlbumViewModel(data)
  )
  ioc.singleton(
    'viewModels.artist',
    () => (data: any) => new ArtistViewModel(data)
  )
  ioc.singleton(
    'viewModels.playlist',
    () => (data: any) => new PlaylistViewModel(data)
  )
}
