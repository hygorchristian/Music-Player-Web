/* eslint-disable no-useless-constructor */
import ioc from '~/lib/ioc'
import { Playlist } from '~/types/Data'
import { AdapterFunction } from '../AdapterInterface'

const adapter: AdapterFunction<Playlist> = (data) => {
  const musicAdapter = ioc.use('adapters.music')

  const returnData: Playlist = {
    id: data?.id,
    name: data?.name,
    creator: data?.creator,
    playlist_image: data?.playlist_image,
    playlist_duration: data?.playlist_duration,
    music_ids: data?.music_ids,
    musics: [],
  }

  if (Array.isArray(data?.Music)) {
    returnData.musics = data.Music.map((music: any) => musicAdapter(music))
  }

  return returnData
}

export default adapter
