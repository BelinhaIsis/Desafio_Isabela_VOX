Feature: Finalizar Compra

  Scenario: Finalizar a compra com sucesso
    Given que o usuário está autenticado
    And ele adicionou o produto "Sauce Labs Backpack" ao carrinho
    When ele procede para o checkout
    And ele preenche suas informações com "John" "Doe" e "12345"
    And ele confirma a compra
    Then a página de confirmação de pedido é exibida
