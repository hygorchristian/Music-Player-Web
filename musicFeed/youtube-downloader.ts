/* eslint-disable no-async-promise-executor */
import { exec } from 'child_process'
import ffmpeg from 'ffmpeg-static'
import ytdl from 'ytdl-core'

async function downloadMP3FromYouTube(
  url: string,
  outputPath: string
): Promise<void> {
  return new Promise(async (resolve, reject) => {
    if (!ytdl.validateURL(url)) {
      reject(new Error('Invalid YouTube URL'))
      return
    }

    try {
      const audioInfo = await ytdl.getBasicInfo(url, { format: 'mp4' })
      const audioFormat = ytdl.chooseFormat(audioInfo.formats, {
        filter: 'audioonly',
        quality: 'highestaudio',
      })

      const ffmpegCommand = `-i pipe:0 -vn -ab 128k -ar 44100 -y ${outputPath}`
      const ffmpegProcess = exec(`${ffmpeg.path} ${ffmpegCommand}`)

      ffmpegProcess.on('error', (error) => reject(error))
      ffmpegProcess.on('exit', (code) => {
        if (code === 0) {
          resolve()
        } else {
          reject(new Error(`FFmpeg exited with code ${code}`))
        }
      })

      ytdl(url, { format: audioFormat })
        .on('error', (error) => reject(error))
        .pipe(ffmpegProcess.stdin)
    } catch (error) {
      reject(error)
    }
  })
}
