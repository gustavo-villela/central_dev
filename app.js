function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum resultado foi encontrado. <br>Você precisa digitar um resultado!</p>"
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Convertendo a string de tags para um array (se existir)
      const tagsArray = dado.tags && typeof dado.tags === 'string' ? dado.tags.split(' ') : [];
      const tagsLowerCase = tagsArray.map(tag => tag.toLowerCase());
  
      // Verifica se o termo pesquisado está presente em algum dos campos
      if (dado.titulo.toLowerCase().includes(campoPesquisa) ||
          dado.descricao.toLowerCase().includes(campoPesquisa) ||
          tagsLowerCase.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <br><a href=${dado.link} target="_blank" style="color: #90ebac";>+ Mais informações</a>
        </div>
        `;
      }
    }
  
    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
      resultados = "<p>Nenhum resultado foi encontrado :(</p>"
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }