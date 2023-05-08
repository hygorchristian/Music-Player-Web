// prismicSeeder.ts
import { createClient, getRepositoryEndpoint } from '@prismicio/client'

const prismicAccessToken = 'YOUR_PRISMIC_ACCESS_TOKEN'
const prismicRepository = 'YOUR_PRISMIC_REPOSITORY_NAME'
const endpoint = getRepositoryEndpoint(prismicRepository)

const client = createClient(endpoint, {
  accessToken: prismicAccessToken,
})

type DataType = 'artist' | 'music' | 'playlist' | 'album'

export async function createDocument(type: DataType, data: any) {
  //
}
