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

* Relacionamento entre a entidade **Courses** com a tabela **Tags**

![02](https://user-images.githubusercontent.com/68359459/166833113-0fbd4905-fe19-4162-885d-46a47ffcb17f.png)

![01](https://user-images.githubusercontent.com/68359459/166833101-a548afe2-1db8-4615-89d0-8cba3b09c77a.png)

## Migrations
Ao utilizar Migrations, garantimos assim a integridade do banco de dados, caso haja alguma alteração em algo tupla, podemos ver na documentação do TypeORM um exemplo de como usar a migrations, 

* Arquivo configuração
Cria na raiz do projeto um arquivo de configuração chamado `ormconfig.js`

```js
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entity: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
}
```

* Comando de criação
Nesse caso para não ter que salvar a biblioteca utilizarei o `npx`

```bash
npx typeorm migration:create -n CourseRefactoring
```

* Configuração da Migration
Para no caso de criar uma Migration com o `ALTER TABLE`, no qual irá alterar-se o nome de uma tupla da tabela

```js
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1651705368250 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE  "courses" RENAME COLUMN "name" TO "course"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE  "courses" RENAME COLUMN "course" TO "name"`,
    );
  }
}
```

* Executar a Migration
Uma boa pratica para ter certeza que a build esteja atualizada é roda o comando `npm run buil` que irá garantir que ela estaja atualizada antes de executar a migration

```js
npx typeorm migration:run
```






