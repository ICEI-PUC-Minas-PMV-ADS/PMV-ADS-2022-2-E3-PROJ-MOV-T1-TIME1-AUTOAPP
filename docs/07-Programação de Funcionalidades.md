# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/AutoApp/blob/0345c562979ead6378dba6dbabd9690c1ba18b69/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/AutoApp/blob/0345c562979ead6378dba6dbabd9690c1ba18b69/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/AutoApp/blob/0345c562979ead6378dba6dbabd9690c1ba18b69/docs/03-Metodologia.md"> Metodologia</a> e  <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/AutoApp/blob/0345c562979ead6378dba6dbabd9690c1ba18b69/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

# Instruções de Acesso

Para acessar a aplicação desenvolvida basta executar o comando npm install e npm start na pasta AutoApp e ler o qr code no aplicativo Expo Go. Demais instruções estão no código.

# Evolução do projeto

**Renata Diniz Guimarães de Oliveira**

Foi responsável por implementar, na etapa 3, as telas de Login, Meus Veículos,  Minhas Manutenções, Meus serviços e Meus anúncios.

> - Login: o usuário tem a opção de logar, registrar (cadastrar-se como proprietário ou mecânico) e recuperação de senha, o frontend está pronto e o Backend foi feito o db.json em localtunnel;
> - Meus veículos: o objetivo é visualizar os veículos dos proprietários, além da opção de adicionar veículo, clicando na opção + ao lado do veículo, os dados cadastrados podem ser editados;
> - Minhas manutenções: o objetivo é visualizar as manutenções dos veículos dos proprietários, além da opção de adicionar manutenção, clicando na opção + ao lado da manutenção realizada, os dados cadastrados podem ser editados;
> - Meus serviços: o objetivo é visualizar os serviços do mecânico, além da opção de adicionar serviço, clicando na opção + ao lado do serviço, os dados cadastrados podem ser editados;
> - Meus anúncios: o objetivo é visualizar os anúncios do mecânico, além da opção de adicionar anúncio, clicando na opção + ao lado da anuncio publicado, os dados cadastrados podem ser editados;

<img src=img/login.png width=20%/> <img src=img/Veiculo.png width=20%/> <img src=img/Manutencao.png width=20%/>
<img src=img/anuncio.png width=20%/> <img src=img/servico.png width=20%/> <br>
Vídeo (Renata): https://youtu.be/Oco76wfoFLg

**Kelly Cesário de Oliveira**

Foi responsável por implementar as telas Homescreen (página inicial), ChangeData (alteração de dados pessoais), AddAutomobiles (cadastrar automóveis), MaintenancesDone (cadastrar manutenções realizadas), RegisterService (cadastrar serviço realizado) e RegisterAd (cadastrar anúncio). Também foi responsável pelo desenvolvimento das rotas da aplicação e de alguns componentes, como o carousel, os botões e o navbar.

> - Homescreen: o usuário encontra um carrossel e quatro botões para interagir (meu perfil, buscar serviços, para proprietários e para mecânicos)
> - ChangeData: o usuário pode alterar seus dados - a tela está em processo de 'mescla' com a tela PersonalInformation, para diminuir o fluxo de cliques.
> - AddAutomobiles: o usuário realiza o cadastro de seus carros. A interface está feita, mas ainda não há integração completa com o banco de dados.
> - MaintenancesDone: o usuário realiza o cadastro de suas manutenções realizadas. A interface está feita, mas ainda não há integração completa com o banco de dados.
> - Register Service: o usuário/mecânico realiza o cadastro de serviços prestados. A interface está feita, mas ainda não há integração completa com o banco de dados.
> - RegisterAd: o usuário/mecânico realiza o cadastro de anúncios de seus serviços. A interface está 50% feita, mas ainda não há integração completa com o banco de dados.


Vídeo ilustrando as telas desenvolvidas e a navegação funcionando: 
https://user-images.githubusercontent.com/81396458/198849874-0561e1a9-f3ac-49c0-85ec-a302d0b9fb62.mp4

Vídeo (Kelly): https://www.youtube.com/watch?v=rMqXpYxdWtA&ab_channel=KellyCes%C3%A1riodeOliveira

Vídeo (Cristiano): https://www.youtube.com/watch?v=-p5x0wrVo3Y 
