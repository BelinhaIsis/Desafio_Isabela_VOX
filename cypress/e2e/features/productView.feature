Feature: Visualização de Produtos

  Scenario: Usuário visualiza a lista de produtos após login
    Given que o usuário está autenticado
    When ele acessa a página de produtos
    Then ele vê uma lista de produtos disponíveis
