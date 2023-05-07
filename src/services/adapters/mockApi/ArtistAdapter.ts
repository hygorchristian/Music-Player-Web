import ioc from '~/lib/ioc'
import { Artist } from '~/types/Data'
import { AdapterFunction } from '../AdapterInterface'

const adapter: AdapterFunction<Artist> = (data) => {
  const albumsAdapter = ioc.use('adapters.album')

  const returnData: Artist = {
    id: data?.id,
    name: data?.name,
    artist_image: data?.artist_image,
    private: data?.private,
  }

  if (Array.isArray(data?.Albums)) {
    returnData.albums = data.Albums.map((album: any) => albumsAdapter(album))
  }

  return returnData
}

export default adapter
