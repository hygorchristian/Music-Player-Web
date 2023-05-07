import ioc from '~/lib/ioc'
import { Music } from '~/types/Data'
import { AdapterFunction } from '../AdapterInterface'

const adapter: AdapterFunction<Music> = (data) => {
  const albumsAdapter = ioc.use('adapters.album')

  const returnData: Music = {
    id: data?.id,
    name: data?.name,
    duration: data?.duration,
    album_id: data?.album_id,
    music_url: data?.music_url,
    is_popular: data?.is_popular,
    album: albumsAdapter(data?.Album),
  }

  return returnData
}

export default adapter
