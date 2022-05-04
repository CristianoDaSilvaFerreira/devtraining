import { MigrationInterface, QueryRunner } from 'typeorm';

export class TagRefactoring1651705658221 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE  "tags" RENAME COLUMN "name" TO "tag"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE  "tags" RENAME COLUMN "tag" TO "name"`,
    );
  }
}
