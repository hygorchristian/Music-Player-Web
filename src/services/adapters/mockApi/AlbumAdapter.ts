/* eslint-disable no-useless-constructor */
import ioc from '~/lib/ioc'
import { Album } from '~/types/Data'
import { AdapterFunction } from '../AdapterInterface'

const adapter: AdapterFunction<Album> = (data) => {
  const artistAdapter = ioc.use('adapters.artist')
  const musicAdapter = ioc.use('adapters.music')

  const returnData: Album = {
    id: data?.id,
    name: data?.name,
    cover_image: data?.cover_image,
    artist_id: data?.artist_id,
    album_duration: data?.album_duration,
    year: data?.year,
    musics: [],
    artist: artistAdapter(data?.Artist),
  }

  if (Array.isArray(data?.Music)) {
    returnData.musics = data.Music.map((music: any) => musicAdapter(music))
  }

  return returnData
}

export default adapter
