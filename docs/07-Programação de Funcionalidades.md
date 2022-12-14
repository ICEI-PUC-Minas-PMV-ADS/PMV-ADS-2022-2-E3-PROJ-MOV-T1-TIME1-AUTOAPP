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

- Vídeo explicativo sobre a entrega 3 (Renata): https://youtu.be/Oco76wfoFLg
- Vídeo explicativo sobre a entrega 4 (Renata): https://youtu.be/RBaDQwXapv4

**Kelly Cesário de Oliveira**

Foi responsável por implementar as telas Homescreen (página inicial), ChangeData (alteração de dados pessoais), AddAutomobiles (cadastrar automóveis), MaintenancesDone (cadastrar manutenções realizadas), RegisterService (cadastrar serviço realizado) e RegisterAd (cadastrar anúncio). Também foi responsável pelo desenvolvimento das rotas da aplicação e de alguns componentes, como o carousel, os botões e o navbar.

> - Homescreen: o usuário encontra um carrossel e quatro botões para interagir (meu perfil, buscar serviços, para proprietários e para mecânicos)
> - ChangeData: o usuário pode alterar seus dados - a tela foi mesclada em PersonalInformation, para diminuir o fluxo de cliques.
> - AddAutomobiles: o usuário realiza o cadastro de seus carros.
> - MaintenancesDone: o usuário realiza o cadastro de suas manutenções realizadas. 
> - Register Service: o usuário/mecânico realiza o cadastro de serviços prestados. 
> - RegisterAd: o usuário/mecânico realiza o cadastro de anúncios de seus serviços.

 - Vídeo ilustrando as telas desenvolvidas e a navegação funcionando: 
https://user-images.githubusercontent.com/81396458/198849874-0561e1a9-f3ac-49c0-85ec-a302d0b9fb62.mp4
- Vídeo explicativo sobre a entrega 3 (Kelly): https://www.youtube.com/watch?v=rMqXpYxdWtA&ab_channel=KellyCes%C3%A1riodeOliveira
- Vídeo explicativo sobre a entrega 4 (Kelly): https://youtu.be/ncl2uGM_lV0

**Pedro Daniel Jardim**

- Fui responsável por implementar na etapa 3 o crud da tela de login, cadastro e edicao do usuário e também pelo Carrosel de carros e manutenções. 
- Fui responsável por implementar na etapa 4 o crud da tela de manuntencao, servicos e cadastro de carros.

- Vídeo explicativo sobre a entrega 3 (Pedro): https://youtu.be/XITN36u-qhw
- Video explicativo sobre a entrega 4 (Pedro): https://youtu.be/_AT62EUJQZk

**Cristiano Ridolfi**

- Vídeo explicativo sobre a entrega 3 (Cristiano): https://www.youtube.com/watch?v=-p5x0wrVo3Y 
- Vídeo explicativo sobre a entrega 4 (Cristiano): https://youtu.be/n2RHwpt9mIo

**Michelle Leal Rodrigues** 

Responsável por implementar as telas ChooseProfile (escolha seu perfil), Personal information (informação pessoal), Mapa, ModalMyServices (modal meus serviços) e ModalMyAds (modal meus anúncios). 

> -	ChooseProfile: o usuário sinaliza se é proprietário de algum veículo, ou mecânico.
> -	Personal information: o usuário pode visualizar seus dados pessoais cadastrados no momento e indicar se gostaria de alterá-los. 
> -	Mapa: utilizando o mapa nativo de cada aparelho, a tela mostra as oficinas cadastradas no aplicativo. Ainda está em processo de desenvolvimento e por enquanto mostra apenas uma região fixa. Foi usado a dependência react-native-maps.
> -	ModalMyServices: o usuário vê com detalhes os dados dos serviços realizados em seu veículo. Interface pronta, e integração com banco de dados em desenvolvimento.
> -	ModalMyAds: o mecânico visualiza os detalhes referentes ao anúncio postado, e seu alcance desde a data de publicação. Interface pronta, e integração com banco de dados em desenvolvimento.

- Vídeo explicativo sobre a entrega 3 (Michelle): https://youtu.be/JXwfETgcTYo
- Vídeo explicativo sobre a entrega 4 (Michelle): https://youtu.be/3tdSsGIDfi4
