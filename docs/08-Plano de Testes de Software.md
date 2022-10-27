# Plano de Testes de Software

Os requisitos para realização dos testes de software são: 

- Aplicativo disponível para utilizar em Android e IOS
- Smartphones (Android e/ou IOS), ou emulador Mobile.
- Conectividade de Internet para acesso ao aplicativo e às plataformas (APISs).

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
 
| Caso de Teste 	| CT-01 – Cadastrar perfil 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - O sistema deverá permitir a criação de um perfil de usuário para o responsável do veículo associado ao seu e-mail. |
| Objetivo do Teste 	| Verificar a funcionalidade de criar uma conta no site. |
| Passos 	| - Acessar o aplicativo <br> - Clicar em "Entrar" <br>  - Clicar na opção Registre-se <br> -Escolher seu perfil (Proprietário ou mecânico) <br>- Preencher os campos obrigatórios (nome completo, e-mail, telefone, CPF, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" |
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
| Caso de Teste | CT-04 –  Verificar os lembretes para os usuários |
|Requisito Associado | RF-008 - O sistema deve emitir lembretes para os usuários, com base nos dados informados no RF-005.		|
|Objetivo do Teste | Verificar se os lembretes aparecem na tela inicial da aplicação |
|Passos | - Acessar o aplicativo <br> - Clicar em "Entrar" <br> - Realizar login com a conta cadastrada <br> - Visualizar os lembretes na tela inicial |
|Critério de Êxito | - O usuário visualiza os lembretes a respeito do cuidado de seu carro |
|  	|  	|
| Caso de Teste | CT-05 –  Verificar alteração de dados |
|Requisitos Associados | RF-002 - O sistema deverá permitir a alteração e a exclusão dos dados de usuários, nesse caso, excluindo também qualquer veículo vinculado a ele. <br> RF-007 - O sistema deverá permitir a edição e exclusão dos dados do veículo.	| 
|Objetivo do Teste | Verificar se o usuário é capaz de alterar seus dados previamente cadastrados |
|Passos | - Acessar o aplicativo <br> - Clicar em "Entrar" <br> - Realizar login com a conta cadastrada <br> - Clicar em "Meu perfil" <br> - Clicar em "Alterar dados" <br> - Realizar as alterações necessárias  |
|Critério de Êxito | - O usuário consegue alterar os dados necessários |
|  	|  	|
| Caso de Teste | CT-06 –  Verificar a inserção de manutenções realizadas |
|Requisito Associado | RF-005 - O sistema deverá armazenar os dados de revisões e de manutenções efetuadas no veículo.	| 
|Objetivo do Teste | Verificar se o usuário é capaz de inserir as manutenções realizadas |
|Passos | - Acessar o aplicativo <br> - Clicar em "Entrar" <br> - Realizar login com a conta cadastrada <br> - Clicar em "Para proprietários" <br> - Clicar em "Cadastro de manutenção" <br> - Preencher as informações do formulário <br> - Clicar em "Salvar" |
|Critério de Êxito | - O usuário consegue salvar a manutenção realizada |
|  	|  	|
| Caso de Teste | CT-07 –  Verificar a inserção serviços prestados |
|Requisito Associado | RF-003 - O sistema deverá permitir a inserção, a alteração e a exclusão dos dados de prestadores de serviços afiliados.		| 
|Objetivo do Teste | Verificar se o usuário (mecânico/proprietário de oficina) é capaz de inserir os serviços prestados |
|Passos | - Acessar o aplicativo <br> - Clicar em "Entrar" <br> - Realizar login com a conta cadastrada <br> - Clicar em "Para mecânicos" <br> - Clicar em "Cadastro de serviços" <br> - Preencher as informações do formulário <br> - Clicar em "Salvar" |
|Critério de Êxito | - O usuário consegue salvar a manutenção realizada |
|  	|  	|

