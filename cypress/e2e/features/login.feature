Feature: Login no site SauceDemo

  Scenario: Login com sucesso
    Given que o usuário está na página de login
    When ele insere o nome de usuário "standard_user" e a senha "secret_sauce"
    Then ele é redirecionado para a página de produtos

  
  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When ele insere o nome de usuário "invalid_user" e a senha "wrong_password"
    Then uma mensagem de erro é exibida
