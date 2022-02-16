const token = 'f76428a708e65c95bf503e1dc4a262';

async function fecthingData(){
    const response = await fetch(
        'https://graphql.datocms.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: '{allDesenhos {id titulo imagem {url} fotoDeFundo }}'
          }),
        }
      )

    const json = await response.json()
    const datas = await json.data

    return datas.allDesenhos
}

