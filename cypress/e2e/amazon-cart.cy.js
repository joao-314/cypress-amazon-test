import AmazonPage from "../pages/AmazonPage"; 

describe("Adicionar livro ao carrinho na Amazon", () => {
  const amazonPage = new AmazonPage();

  it("deve adicionar o livro 'AI Engineering' ao carrinho com as especificações corretas", () => {
    amazonPage.visit();
    amazonPage.searchForBook("AI Engineering: Building Applications with Foundation Models");
    amazonPage.applyFilter(amazonPage.newConditionFilter, "Novo");
    amazonPage.applyFilter(amazonPage.englishLanguageFilter, "Inglês");
    amazonPage.selectBook("AI Engineering: Building Applications with Foundation Models");
    amazonPage.selectBookFormat("Capa Comum");
    amazonPage.validateAuthor("Chip HuyenX");
    amazonPage.addToCart();
    amazonPage.validateSuccessMessage();
  });
});