function agruparDados(listaPerfumes) {
    const tamanho = 0;
    const preco = 1;

    const perfumes_agrupados = Object.values(
        listaPerfumes.reduce((acc, item) => {
            if (!acc[item.id]) {
            acc[item.id] = {
              id: item.id,
              nome: item.nome,
              marca: item.marca,
              status: item.status,
              acordes: [],
              imagem: item.imagem,
              variacao: [[], []] //tamanho, preço
            };
          }
          acc[item.id].acordes = item.acordes.split(';')
          acc[item.id].variacao[tamanho].push(item.tamanho);
          acc[item.id].variacao[preco].push(item.preco);
          return acc;
        }, {})
    );

    return perfumes_agrupados;     
}