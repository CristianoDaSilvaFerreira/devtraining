# API Dev Training

## Criação

### Fundamental

 Para criar essa API é necessário ter o <a href="https://nodejs.org/en/" targer="_blank">NodeJs</a> instalado, para fazer a verificação se tem o mesmo instalado

```bash
node -v
```

Após ter a certeza podemos instalar a que tem o NodeJs instalado, pode-se instalar a CLI do NestJs<a href="https://nestjs.com/" targer="_blank">CLI do NestJs</a>

```bash
npm i -g @nestjs/cli
```

```bash
nest new project-name
```


### Banco de Dados
Irá ser utilizado o banco de dados <a href="https://www.postgresql.org/" targer="_blank">PostgreSQL</a> juntamente com o <a href="https://www.docker.com/" targe="_blank">Docker</a> e o <a href="https://typeorm.io/" target="_blank">TypeORM</a>

```bash
npm i typeorm @nestjs/typeorm pg
```


## Relacionamento entre as tabelas
O TypeORM nos ajuda na questão da criação do relacionamento entre as tabelas, usando o decorators

![01.png](/home/cristiano/Imagens/Pirnts/Projetos/Devtraining/01.png)

![02.png](/home/cristiano/Imagens/Pirnts/Projetos/Devtraining/02.png)