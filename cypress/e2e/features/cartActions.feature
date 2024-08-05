Feature: Ações do Carrinho

  Scenario: Adicionar um produto ao carrinho
    Given que o usuário está autenticado
    And ele está na página de produtos
    When ele adiciona o produto "Sauce Labs Backpack" ao carrinho
    Then o produto "Sauce Labs Backpack" é exibido no carrinho

  Scenario: Remover um produto do carrinho
    Given que o usuário está autenticado
    And ele adicionou o produto "Sauce Labs Backpack" ao carrinho
    When ele remove o produto "Sauce Labs Backpack" do carrinho
    Then o carrinho está vazio
