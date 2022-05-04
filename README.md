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

![01](https://user-images.githubusercontent.com/68359459/166833101-a548afe2-1db8-4615-89d0-8cba3b09c77a.png)


![02](https://user-images.githubusercontent.com/68359459/166833113-0fbd4905-fe19-4162-885d-46a47ffcb17f.png)



