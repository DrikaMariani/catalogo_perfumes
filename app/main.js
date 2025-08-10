let perfumes = []
const endpointApi = 'https://sheetdb.io/api/v1/zfsczmzk8l8y0'

getBuscarPerfumesMasculinosAPI()

async function getBuscarPerfumesMasculinosAPI() {
    const res = await fetch(endpointApi)
    perfumes_masculinos = await res.json();
    let lista_perfumes_masculinos = agruparDados(perfumes_masculinos);

    exibirPerfumesMasculinos(lista_perfumes_masculinos)
}
