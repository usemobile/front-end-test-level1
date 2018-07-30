#### front-end-test 
# level 1

Este repositório possui um projeto de site incompleto usando o framework **AngularJs**. Nós queremos avaliar o seu nível de conhecimento em conceitos básicos do desenvolvimento Web (HTML5, CCS3 e Javascript) e sua capacidade de trabalhar em templates utilizando o framework AngularJs. Não tenha pressa! Iremos avaliar a qualidade do seu código, mesmo que esteja incompleto. Siga as instruções, tente completar todas as missões, e boa sorte!

### Missões
* Trocar a logo usada no site pela logo da Usemobile, localizada em `app/img/use-logo.png` (certifique-se que de trocar também no layout mobile);
* Na página **Clientes**, programe o comportamento de criar um novo registro de cliente na tabela (observe o layout localizado em `layouts/novo_cliente.png`);
* Na página **Clientes**, crie também um modal para a edição de um registro de cliente, seguindo o layout localizado em `layouts/editar_cliente.png`. Programe também o comportamento para editar/remover o registro da tabela de clientes;
* Na página **Clientes**, observe que existe um filtro que pesquisa os clientes da tabela pelo **nome** dos clientes. Faça uma melhoria no filtro, para que ele pesquise também pelo **sobrenome** e **CPF** do cliente;
* Crie uma página para a listagem das **Compras** do dia, seguindo o mesmo padrão da página de clientes. Siga o layout localizado em `layouts/compras.png`. Lembre-se de adicionar uma opção no menu lateral para a página criada. Use os dados do arquivo `layouts\compras.json` para criar uma lista de compras e preencher a tabela;
* Na página **Compras**, programe um comportamento para remover um registro de compra (adicione a opção de remover na coluna **Ações** da tabela);
* Na página **Compras**, crie um modal para visualizar os detalhes da compra, seguindo o layout localizado em `layouts/compra_detalhe.png`. Use os dados do arquivo `layouts\compra_detalhe.json` para preencher a tabela.

### Requisitos
* Ter o [Node.js](https://nodejs.org/) e npm instalado em seu computador;
* Ter o [Git](https://git-scm.com/) instalado em seu computador;
* Ter um editor de texto de sua preferência;
* Ter um navegador de sua preferência.

### Instruções
* Clone o projeto em sua máquina;
* Execute o comando `npm start` para visualizar o site em sua máquina;
* Faça as alterações soliciadas;
* Mande um e-mail com o link para download do .zip do seu projeto para patrick@usemobile.com.br com o titutlo "[front-end-test] - [SEU_NOME]". Fale um pouco de suas dificuldades e desafios durante o desenvolvimento de suas soluções no e-mail.

Uma breve documentação do template utilizado:
##### estrutura de pastas
```
front-end-test-level1
├ app
| ├ css (arquivos de estilo .css)
| ├ img (imagens utilizadasa no site)
| ├ js
| | ├ controller (controllers do AngularJs)
| | ├ directive (diretivas do AngularJs)
| | ├ factory (factories do AngularJs)
| | └ app.js (configurações do template)
| ├ templates (templates do AngularJs)
| └ views (arquivos HTML das páginas do site)
├ assets (arquivos gerais usados no template)
├ bower_componentes (pacotes do bower)
├ master (arquivos de configuração do template)
├ node_modules (pacotes do npm)
├ server (arquivos referentes ao template)
├ vendor (mais arquivos referentes ao template)
├ index.html (pagina inicial especificação dos arquivos a serem carregados)
└ package.json (configuração do npm)
```

### Dicas
* O template foi feito baseado no projeto [Centric](http://themicon.co/theme/centric/v1.9.5/angularjs/#/app/dashboard). Conferir a documentação do mesmo deve ajudá-lo na construção das telas;
* Não se preocupe com back-end e banco de dados. Queremos ver os comportamentos funcionando no front-end;
* Seja amiga da [documentação do AngularJs](https://docs.angularjs.org/api);
* Tente comentar seu código nas linhas mais importantes.
