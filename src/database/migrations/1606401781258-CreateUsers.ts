import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1606401781258 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'password',
              type: 'varchar',
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'cpf',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'rg',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'dateOfBirth',
              type: 'timestamp',
            },
            {
              name: 'genre',
              type: 'varchar',
            },
            {
              name: 'celphone',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'address',
              type: 'varchar',
            },
            {
              name: 'number',
              type: 'varchar',
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'zipCode',
              type: 'varchar',
            },
            {
              name: 'neighborhood',
              type: 'varchar',
            },
            {
              name: 'reference',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'city',
              type: 'varchar',
            },
            {
              name: 'state',
              type: 'varchar',
            },
            {
              name: 'admin',
              type: 'boolean',
              default: false,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
