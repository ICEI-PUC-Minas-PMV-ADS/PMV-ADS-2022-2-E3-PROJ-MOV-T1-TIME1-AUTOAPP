# Plano de Testes de Software

Os requisitos para realização dos testes de software são: 

- Aplicativo disponível oara utilizar em Android e IOS
- Smartphones (Android e/ou IOS), ou emulador Mobile.
- Conectividade de Internet para acesso ao aplicativo e às plataformas (APISs).

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
 
| Caso de Teste 	| CT-01 – Cadastrar perfil 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - O sistema deverá permitir a criação de um perfil de usuário para o responsável do veículo associado ao seu e-mail. |
| Objetivo do Teste 	| Verificar a funcionalidade de criar uma conta no site. |
| Passos 	| - Acessar o aplicativo <br> - Clicar em "Entrar" <br>  - Clicar na opção Registre-se <br> - Preencher os campos obrigatórios (nome completo, e-mail, telefone, CPF, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| Caso de Teste 	| CT-02 – Verificar a funcionalidade de login do usuário.	|
|Requisito Associado | RF-001	- O sistema deverá permitir a criação de um perfil de usuário para o responsável do veículo associado ao seu e-mail. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar o aplicativo <br> - Clicar em "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo da senha <br> - Clicar em "Login" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| Caso de Teste | CT-03 – Verificar a funcionalidade de criar um perfil de veículo no app |
|Requisito Associado | RF-004 - O sistema deverá permitir a criação de um perfil para o veículo (ano, modelo, cor...), permitindo a exibição de seus dados básicos.	|
|Objetivo do Teste | Verificar se o usuário consegue criar perfil com os dados do veículo. |
|Passos | - Acessar o aplicativo <br> - Clicar em "Entrar" <br> - Realizar login com a conta cadastrada <br> - Clicar na opção Sou proprietário <br> - Selecionar Meu perfil <br> - Cadastrar os dados do veículo |
|Critério de Êxito | - O usuário consegue criar um perfil .  |
|  	|  	|
| Caso de Teste | CT-05 – xx |
|Requisito Associado | RF-00x - xx	|
|Objetivo do Teste | Verificar se o usuário consegue salvar suas listas de livros. |
|Passos | - Acessar o navegador <br> - Informar o endereço do site <br> - Realizar login com a conta cadastrada <br> - Acessar uma lista <br> - Fazer alterações (acrescentar e/ou remover livros) |
|Critério de Êxito | - O usuário consegue salvar suas listas com sucesso. |
|  	|  	|
| Caso de Teste | CT-06 – xx |
|Requisito Associado | RF-002 - A aplicação deve ter um chat para conversação para os usuários interagirem entre si.	|
|Objetivo do Teste | Verificar se o chat consegue ser utilizado pelos usuários. |
|Passos | -  Acessar a aplicação <br> - Acessar a lista de usuários curtidos <br> - Selecionar um usuário para abrir o chat <br> - Ser redirecionado para o What'sApp <br> - Enviar mensagens <br> - Receber mensagens |
|Critério de Êxito | - Os usuários são capazes de interagir no chat da aplicação. |
|  	|  	|
| Caso de Teste | CT-06 – Buscar livros |
|Requisitos Associados | RF-003 - A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar livros.	<br> RF-006 - A aplicação deverá permitir buscar livros previamente cadastrados na base de dados.	|
|Objetivo do Teste | Verificar se o usuário consegue localizar livros. |
|Passos | - Acessar a aplicação <br> - Digitar o nome de um livro na barra de pesquisa <br> - Clicar na lupa de busca <br> - Visualizar o resultado da busca |
|Critério de Êxito | - O usuário consegue buscar e visualizar o livro desejado. |
|  	|  	|
| Caso de Teste | CT-07 – Sistema de curtidas (_Match_) |
|Requisito Associado | RF-007 - A aplicação deve permitir a função _match_ quando um usuário se identificou com outro usuário.	 |
|Objetivo do Teste | Verificar se o sistema realiza a curtida (_match_) entre os usuários. |
|Passos | - Fazer login <br> - Visualizar listas de outros usuários <br> - Curtir a lista <br> - Receber a informação de _match_ realizado |
|Critério de Êxito | - A curtida entre usuários é realizada. |
|  	|  	|
| Caso de Teste | CT-08 –  Favoritar livros |
|Requisito Associado | RF-008 - A aplicação deve oferecer a funcionalidade de favoritar livros 	 |
|Objetivo do Teste | Verificar se o usuário consegue favoritar livros |
|Passos | - Fazer login <br> - Acessar o menu da aplicação <br> - Visitar a página de livros disponíveis <br> - Clicar no livro desejado para abrir o modal com detalhes dos livros <br> - Clicar em "Adicionar aos favoritos"  |
|Critério de Êxito | - O usuário consegue favoritar seus livros desejados. |
|  	|  	|
| Caso de Teste | CT-09 –  Recuperar senha |
|Requisito Associado | RF-009 - A aplicação deve permitir que o usuário recupere sua senha  	 |
|Objetivo do Teste | Verificar se o usuário consegue recuperar sua senha de acesso |
|Passos | - Acessar a página de login <br> - Clicar em "Esqueci a Senha" <br> - Preencher o e-mail da conta cadastrada e clicar no botão "Recuperar" <br> - Preencher os dados necessários e clicar em "Registrar"  |
|Critério de Êxito | - O usuário consegue recuperar sua senha com sucesso. |
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
