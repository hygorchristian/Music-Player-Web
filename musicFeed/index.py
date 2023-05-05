import requests

def search_image(query, is_album_cover=True):
    api_key = 'AIzaSyBhtV6nk1EliUzBERGmswCZqsu0T_S_G8Q'
    custom_search_engine_id = 'e869875150417257d'

    url = 'https://www.googleapis.com/customsearch/v1'

    query_suffix = "album cover" if is_album_cover else "artist"
    full_query = f"{query} {query_suffix}"

    params = {
      'key': api_key,
      'cx': custom_search_engine_id,
      'q': full_query,
      'searchType': 'image',
      'imgSize': 'large',
      'num': 1,
      'safe': 'active',
      'imgType': 'photo',
      'imgColorType': 'color',
    }

    response = requests.get(url, params=params)
    response.raise_for_status()

    results = response.json()

    if 'items' in results:
        first_result = results['items'][0]
        return first_result['link']

    return None

if __name__ == '__main__':
    album_cover = search_image('happier than ever', is_album_cover=True)
    print(album_cover)

    artist_image = search_image('this is billie Eilish', is_album_cover=False)
    print(artist_image)
