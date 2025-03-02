class AmazonPage {
    // Seletores
    searchBox = "#twotabsearchtextbox";
    newConditionFilter = "#p_n_condition-type\\/13862762011";
    englishLanguageFilter = "#p_n_feature_nine_browse-bin\\/8529758011"; 
    searchResults = ".s-result-item";
    bookFormat = "#a-autoid-2-announce";
    authorName = ".author";
    addToCartButton = "#add-to-cart-button";
    successMessage = "#NATC_SMART_WAGON_CONF_MSG_SUCCESS";
  
    // Ações
  
    /**
     * Acessa a página inicial da Amazon e define o tamanho da viewport.
     */
    visit() {
      cy.visit("https://www.amazon.com.br");
      cy.viewport(1280, 720);
    }
  
    /**
     * Realiza a busca por um livro no campo de busca.
     * @param {string} bookTitle - Título do livro a ser buscado.
     */
    searchForBook(bookTitle) {
      cy.get(this.searchBox)
        .should("be.visible")
        .type(bookTitle)
        .type("{enter}");
    }
  
    /**
     * Aplica um filtro específico na página de resultados.
     * @param {string} filterSelector - Seletor do filtro.
     * @param {string} filterText - Texto do filtro a ser aplicado.
     */
    applyFilter(filterSelector, filterText) {
      cy.get(filterSelector)
        .should("be.visible")
        .contains(filterText)
        .click();
    }
  
    /**
     * Seleciona um livro específico nos resultados da busca.
     * @param {string} bookTitle - Título do livro a ser selecionado.
     */
    selectBook(bookTitle) {
      cy.get(this.searchResults)
        .contains(bookTitle)
        .should("be.visible")
        .click();
    }
  
    /**
     * Seleciona o formato do livro (ex: "Capa Comum").
     * @param {string} format - Formato do livro a ser selecionado.
     */
    selectBookFormat(format) {
      cy.get(this.bookFormat)
        .contains(format)
        .should("be.visible")
        .click();
    }
  
    /**
     * Valida se o autor do livro é o esperado.
     * @param {string} authorName - Nome do autor a ser validado.
     */
    validateAuthor(authorName) {
      cy.get(this.authorName)
        .contains(authorName)
        .should("be.visible");
    }
  
    /**
     * Adiciona o livro ao carrinho.
     */
    addToCart() {
      cy.get(this.addToCartButton)
        .should("be.visible")
        .click();
    }
  
    /**
     * Valida a mensagem de sucesso ao adicionar o livro ao carrinho.
     */
    validateSuccessMessage() {
      cy.get(this.successMessage)
        .should("be.visible")
        .and("contain.text", "Adicionado ao carrinho");
    }
  }
  
  export default AmazonPage;