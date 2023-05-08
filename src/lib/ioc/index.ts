import { AdapterFunction } from '~/services/adapters/AdapterInterface'
import { Album, Artist, Music, Playlist } from '~/types/Data'
import IoC from './IoC'

import { bindDefaultAdapters } from '~/services/adapters/mockApi'
import { bindDefaultViewModels, ViewModelBuilder } from '../viewModels'
import AlbumViewModel from '../viewModels/AlbumViewModel'
import ArtistViewModel from '../viewModels/ArtistViewModel'
import MusicViewModel from '../viewModels/MusicViewModel'
import PlaylistViewModel from '../viewModels/PlaylistViewModel'

export interface ContainersContract {
  // Adapters
  'adapters.artist': AdapterFunction<Artist>
  'adapters.album': AdapterFunction<Album>
  'adapters.music': AdapterFunction<Music>
  'adapters.playlist': AdapterFunction<Playlist>

  // View Models
  'viewModels.album': ViewModelBuilder<AlbumViewModel>
  'viewModels.artist': ViewModelBuilder<ArtistViewModel>
  'viewModels.music': ViewModelBuilder<MusicViewModel>
  'viewModels.playlist': ViewModelBuilder<PlaylistViewModel>
}

const ioc = new IoC<ContainersContract>(() => {
  bindDefaultViewModels()
  bindDefaultAdapters()
})

// Default binds

export default ioc
