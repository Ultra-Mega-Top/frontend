## Entrega 
> Bom dia presados.
> Para este teste foram feitos dois repositórios frontend e backend, gosto de trabalhar dessa forma porque simplifica minhas ci/cd..

#### Repo **FRONTEND**
> Para faze-lo funcionar bastar baixar e rodar os seguintes comandos:

- Comandos bash:
```bash
npm i
npx quasar dev
```

- Repo Github: [Aqui](https://github.com/Ultra-Mega-Top/frontend)

- Informações adicionais:
> Ao acessar o projeto a página inicial retornará erro 404. Isso é proposital, geralmente uso esta página para coisas mais importantes. Para acessar a plataforma UltraMegaTop acesse a url: [/panel](http://localhost:8080/#/panel)

---

#### Repo BACKEND
> Para roda-lo basta rodar os comandos abaixo.

- Comandos Bash:
```bash
npm i
docker-compose up
```

- Repo Github: [Aqui](https://github.com/Ultra-Mega-Top/backend)

----
### Considerações:
O Desafio foi bastante legal de ser executado. Embora não tenha tido tempo de entregar como gostaria consegui evoluir bastante os conceitos e entregar toda a proposta funcional. Entretendo não está estável para ser um produto. Acredito que como um teste este projeto cumpre suas expectativas.
Embora o prazo para o projeto tenha sido de 5 dias infelizmente não tenho tempo para trabalhar mais nele. posso trabalhar apenas nos meus fins de semana. por isso estou entregando antes.

Gostaria de ressaltar a modularização feita em src/components/questions, como sendo talvez a parte mais importante de projeto. porque nela aplico com sucesso LSP e DIP, além de usar bastente o factory Pattern. Projetei para que o projeto gire em torno de centro comum as "QuestionProtocol", elas ditam como cada questão deve se comportar em cada meio diferente, dentro dela existe 3 possíveis situações editable, viewer e runtime cada um deles conta com uma forma de renderização especifica. dessa forma tudo que for relativo a uma questão fica agrupado em único lugar, tornando extremamente fácil a expansão das questões e compreensão do ecossistema como um todo.

Gosto de trabalhar com esse pattern porque facilita a expansão por profissionais menos sêniores enquanto foco na expansão de funcionalidades da plataforma.

Infelizmente não pude publicar o projeto por falta de tempo, más gostaria de resaltar que tenho conhecimentos em AWS, Azure DevOps e Github actions para faze-lo de forma automatizadas  


# Desafio

Considere o seguinte cenário:

A Faculdade “Ultra Mega Top” está reestruturando alguns processos educacionais, devido à pandemia e um dos processos a serem modificados é o de avaliação de aprendizagem. Várias ferramentas foram analisadas, mas a instituição decidiu criar sua própria ferramenta.

Na primeira versão da ferramenta deverá ser possível cadastrar uma
avaliação e possibilitar que os alunos a respondam de forma online, com a
correção sendo feita automaticamente pela ferramenta. Sendo assim, os
principais requisitos funcionais do sistema são:

1. O sistema deve permitir o cadastro de avaliações: deverá ser
   informado o título da avaliação e possibilitar criar pelo menos uma
   pergunta, com 5 opções de resposta e informar ainda a opção correta.

2. Responder a avaliação, calculando o resultado: permitir acessar a
   avaliação e, ao responder, deverá ser mostrado o resultado do aluno
   na tela.

Importante: algumas informações foram omitidas de forma proposital. Você
deverá decidir qual a melhor forma para entregar a melhor solução dentro do cenário proposto e essas decisões devem estar documentadas no software, na forma de comentários.

Regras para implementação:
• Utilizar Vue.js, na versão 2.6 (obrigatório);
• Utilizar Node Js (obrigatório);
• Utilizar como banco de dados o Mongo DB (obrigatório);
• Utilizar o Git, juntamente com o GitHub(obrigatório);
• Utilizar o NestJs para implementação do backend (obrigatório);
• Utilizar API Rest (obrigatório);
• Publicar a aplicação em uma plataforma de cloud e disponibilizar o link
para acesso à mesma (desejável);

O que iremos avaliar:
• Organização do código;
• Organização no controle de versão;
• Complexidade e modularização do código;
• Documentação com orientações para execução do desafio.

O que deve ser entregue:
• Link do projeto no GitHub;
• Demais documentos referentes ao projeto, se houver;
• Link de acesso à aplicação publicada na plataforma de cloud (se houver).
A entrega deve ser feita em até 5 dias, a contar da data de recebimento
das instruções do teste.

Resposta: Deixei o link com suas respostas no espaço abaixo. Em caso de dúvida, entre em contato pelo e-mail: clarice.neto@demarco.com.br
