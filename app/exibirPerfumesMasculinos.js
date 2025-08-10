const gridPerfumes = document.getElementById('perfumes')

function exibirPerfumesMasculinos(listaPerfumes) {
    gridPerfumes.innerHTML = ''; 
    listaPerfumes.forEach(perfume => {
        if (perfume.status == 'ATIVO') {
        gridPerfumes.innerHTML += `
        <div class="perfume-card">
            <div class="perfume-number">${perfume.id}</div>
            <img src="${perfume.imagem}" alt="${perfume.nome}" class="perfume-image">
            <div class="perfume-brand">${perfume.marca}</div>
            <div class="perfume-name"><img src="${perfume.imagem}" alt="${perfume.nome}" class="perfume-name-image">${perfume.nome}</div> 
            <div class="acordes-section">
                <div class="acordes-title">Principais Acordes:</div>
                <div class="acordes-list">${exibeAcordes(perfume.acordes)}</div>
            </div> 
            <div class="sizes-section">
                <div class="sizes-title">Tamanhos Disponíveis:</div>
                <div class="size-options">${exibeTamanhosDisponveis(perfume.variacao)}</div>
            </div>
        </div>`     
        }
    })
}

function exibeAcordes(acordes){
    let tagAcordes = ''
    acordes.forEach(acorde => {
        tagAcordes += `<span class="acorde-tag">${acorde}</span>`
    });

    return tagAcordes;
}

function exibeTamanhosDisponveis(variacao){
    let tagTamanhos = ''

    let tamanho = variacao[0]
    let preco = variacao[1]

    for (let i = 0; i < variacao[0].length; i++) {
        tagTamanhos += `
        <div class="size-option">
            <div class="size-ml">${tamanho[i]}ml</div>
            <div class="size-price"> R$ ${preco[i]}</div>
        </div>`
    }

    return tagTamanhos;
}