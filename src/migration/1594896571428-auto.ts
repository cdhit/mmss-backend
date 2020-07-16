import {MigrationInterface, QueryRunner} from "typeorm";

export class auto1594896571428 implements MigrationInterface {
    name = 'auto1594896571428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "email" varchar(128) NOT NULL, "password" varchar(128) NOT NULL, "role" varchar CHECK( role IN ('admin','manager','basic') ) NOT NULL DEFAULT ('basic'), "userName" varchar(64) NOT NULL, "active" boolean NOT NULL DEFAULT (1), "lastLogin" date NOT NULL, "profile" text, "firstName" varchar(64), "lastName" varchar(64), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_da5934070b5f2726ebfd3122c80" UNIQUE ("userName"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_a95e949168be7b7ece1a2382fe" ON "user" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_e11e649824a45d8ed01d597fd9" ON "user" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_da5934070b5f2726ebfd3122c8" ON "user" ("userName") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
        await queryRunner.query(`CREATE TABLE "payee" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, CONSTRAINT "UQ_b82ccd31f8dce1a9caa80c22c31" UNIQUE ("name", "ledgerId", "deletedAt"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_3e71d4e5c776c2210a6c00033e" ON "payee" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_07e969c162fe18103ef44dd074" ON "payee" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_09f0437c922d2ab625f650a6b6" ON "payee" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_294557973b2301e41a7896b421" ON "payee" ("ledgerId") `);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "transferType" varchar CHECK( transferType IN ('0','-1','1') ) NOT NULL DEFAULT (-1), "amount" integer NOT NULL, "date" datetime NOT NULL, "toAmount" integer, "accountId" integer, "toAccountId" integer, "categoryId" integer, "payeeId" integer)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fcce0ce5cc7762e90d2cc7e230" ON "transaction" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_83cb622ce2d74c56db3e0c29f1" ON "transaction" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_f74e18cc3832e2b39ea077a6c8" ON "transaction" ("date") `);
        await queryRunner.query(`CREATE INDEX "IDX_3d6e89b14baa44a71870450d14" ON "transaction" ("accountId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ac8efff1e2135ddfd0ab1796c5" ON "transaction" ("toAccountId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d3951864751c5812e70d033978" ON "transaction" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, CONSTRAINT "UQ_1c705c6b6388c95c22c103d15e8" UNIQUE ("name", "ledgerId", "deletedAt"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_86ee096735ccbfa3fd319af183" ON "category" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_c15e0393f5bebfb602fb077897" ON "category" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_23c05c292c439d77b0de816b50" ON "category" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_060e989c9ab11a9995d95cf734" ON "category" ("ledgerId") `);
        await queryRunner.query(`CREATE TABLE "ledger" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "userId" integer, CONSTRAINT "UQ_c19f04f83dfe9cb88f959188445" UNIQUE ("name", "userId", "deletedAt"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_10f36cf762167a0b4ba11783c2" ON "ledger" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_5cd94fff677acfd7f4cd97cacf" ON "ledger" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_a21c3af32b2379186183e0c71b" ON "ledger" ("userId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_46a672210083f21abc60d2866b" ON "ledger" ("name") `);
        await queryRunner.query(`CREATE TABLE "account" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, "amount" integer NOT NULL, "currency" text, CONSTRAINT "UQ_1aaa9c6e960421d088610e487cd" UNIQUE ("name", "ledgerId", "deletedAt"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_31e2fd7720a2da3af586f17778" ON "account" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_f50e152d11f027ee500dbad6c9" ON "account" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_414d4052f22837655ff312168c" ON "account" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_d83bc879aa5ef4074e71031662" ON "account" ("ledgerId") `);
        await queryRunner.query(`DROP INDEX "IDX_3e71d4e5c776c2210a6c00033e"`);
        await queryRunner.query(`DROP INDEX "IDX_07e969c162fe18103ef44dd074"`);
        await queryRunner.query(`DROP INDEX "IDX_09f0437c922d2ab625f650a6b6"`);
        await queryRunner.query(`DROP INDEX "IDX_294557973b2301e41a7896b421"`);
        await queryRunner.query(`CREATE TABLE "temporary_payee" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, CONSTRAINT "UQ_b82ccd31f8dce1a9caa80c22c31" UNIQUE ("name", "ledgerId", "deletedAt"), CONSTRAINT "FK_294557973b2301e41a7896b4218" FOREIGN KEY ("ledgerId") REFERENCES "ledger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_payee"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId" FROM "payee"`);
        await queryRunner.query(`DROP TABLE "payee"`);
        await queryRunner.query(`ALTER TABLE "temporary_payee" RENAME TO "payee"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_3e71d4e5c776c2210a6c00033e" ON "payee" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_07e969c162fe18103ef44dd074" ON "payee" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_09f0437c922d2ab625f650a6b6" ON "payee" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_294557973b2301e41a7896b421" ON "payee" ("ledgerId") `);
        await queryRunner.query(`DROP INDEX "IDX_fcce0ce5cc7762e90d2cc7e230"`);
        await queryRunner.query(`DROP INDEX "IDX_83cb622ce2d74c56db3e0c29f1"`);
        await queryRunner.query(`DROP INDEX "IDX_f74e18cc3832e2b39ea077a6c8"`);
        await queryRunner.query(`DROP INDEX "IDX_3d6e89b14baa44a71870450d14"`);
        await queryRunner.query(`DROP INDEX "IDX_ac8efff1e2135ddfd0ab1796c5"`);
        await queryRunner.query(`DROP INDEX "IDX_d3951864751c5812e70d033978"`);
        await queryRunner.query(`CREATE TABLE "temporary_transaction" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "transferType" varchar CHECK( transferType IN ('0','-1','1') ) NOT NULL DEFAULT (-1), "amount" integer NOT NULL, "date" datetime NOT NULL, "toAmount" integer, "accountId" integer, "toAccountId" integer, "categoryId" integer, "payeeId" integer, CONSTRAINT "FK_3d6e89b14baa44a71870450d14d" FOREIGN KEY ("accountId") REFERENCES "account" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_ac8efff1e2135ddfd0ab1796c5a" FOREIGN KEY ("toAccountId") REFERENCES "account" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d3951864751c5812e70d033978d" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_70815d35b9b0fe366cc9014cb9e" FOREIGN KEY ("payeeId") REFERENCES "payee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_transaction"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "transferType", "amount", "date", "toAmount", "accountId", "toAccountId", "categoryId", "payeeId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "transferType", "amount", "date", "toAmount", "accountId", "toAccountId", "categoryId", "payeeId" FROM "transaction"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`ALTER TABLE "temporary_transaction" RENAME TO "transaction"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fcce0ce5cc7762e90d2cc7e230" ON "transaction" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_83cb622ce2d74c56db3e0c29f1" ON "transaction" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_f74e18cc3832e2b39ea077a6c8" ON "transaction" ("date") `);
        await queryRunner.query(`CREATE INDEX "IDX_3d6e89b14baa44a71870450d14" ON "transaction" ("accountId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ac8efff1e2135ddfd0ab1796c5" ON "transaction" ("toAccountId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d3951864751c5812e70d033978" ON "transaction" ("categoryId") `);
        await queryRunner.query(`DROP INDEX "IDX_86ee096735ccbfa3fd319af183"`);
        await queryRunner.query(`DROP INDEX "IDX_c15e0393f5bebfb602fb077897"`);
        await queryRunner.query(`DROP INDEX "IDX_23c05c292c439d77b0de816b50"`);
        await queryRunner.query(`DROP INDEX "IDX_060e989c9ab11a9995d95cf734"`);
        await queryRunner.query(`CREATE TABLE "temporary_category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, CONSTRAINT "UQ_1c705c6b6388c95c22c103d15e8" UNIQUE ("name", "ledgerId", "deletedAt"), CONSTRAINT "FK_060e989c9ab11a9995d95cf7343" FOREIGN KEY ("ledgerId") REFERENCES "ledger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_category"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId" FROM "category"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`ALTER TABLE "temporary_category" RENAME TO "category"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_86ee096735ccbfa3fd319af183" ON "category" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_c15e0393f5bebfb602fb077897" ON "category" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_23c05c292c439d77b0de816b50" ON "category" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_060e989c9ab11a9995d95cf734" ON "category" ("ledgerId") `);
        await queryRunner.query(`DROP INDEX "IDX_10f36cf762167a0b4ba11783c2"`);
        await queryRunner.query(`DROP INDEX "IDX_5cd94fff677acfd7f4cd97cacf"`);
        await queryRunner.query(`DROP INDEX "IDX_a21c3af32b2379186183e0c71b"`);
        await queryRunner.query(`DROP INDEX "IDX_46a672210083f21abc60d2866b"`);
        await queryRunner.query(`CREATE TABLE "temporary_ledger" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "userId" integer, CONSTRAINT "UQ_c19f04f83dfe9cb88f959188445" UNIQUE ("name", "userId", "deletedAt"), CONSTRAINT "FK_a21c3af32b2379186183e0c71b9" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_ledger"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "userId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "userId" FROM "ledger"`);
        await queryRunner.query(`DROP TABLE "ledger"`);
        await queryRunner.query(`ALTER TABLE "temporary_ledger" RENAME TO "ledger"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_10f36cf762167a0b4ba11783c2" ON "ledger" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_5cd94fff677acfd7f4cd97cacf" ON "ledger" ("createdAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_a21c3af32b2379186183e0c71b" ON "ledger" ("userId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_46a672210083f21abc60d2866b" ON "ledger" ("name") `);
        await queryRunner.query(`DROP INDEX "IDX_31e2fd7720a2da3af586f17778"`);
        await queryRunner.query(`DROP INDEX "IDX_f50e152d11f027ee500dbad6c9"`);
        await queryRunner.query(`DROP INDEX "IDX_414d4052f22837655ff312168c"`);
        await queryRunner.query(`DROP INDEX "IDX_d83bc879aa5ef4074e71031662"`);
        await queryRunner.query(`CREATE TABLE "temporary_account" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, "amount" integer NOT NULL, "currency" text, CONSTRAINT "UQ_1aaa9c6e960421d088610e487cd" UNIQUE ("name", "ledgerId", "deletedAt"), CONSTRAINT "FK_d83bc879aa5ef4074e710316628" FOREIGN KEY ("ledgerId") REFERENCES "ledger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_account"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId", "amount", "currency") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId", "amount", "currency" FROM "account"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`ALTER TABLE "temporary_account" RENAME TO "account"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_31e2fd7720a2da3af586f17778" ON "account" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_f50e152d11f027ee500dbad6c9" ON "account" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_414d4052f22837655ff312168c" ON "account" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_d83bc879aa5ef4074e71031662" ON "account" ("ledgerId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_d83bc879aa5ef4074e71031662"`);
        await queryRunner.query(`DROP INDEX "IDX_414d4052f22837655ff312168c"`);
        await queryRunner.query(`DROP INDEX "IDX_f50e152d11f027ee500dbad6c9"`);
        await queryRunner.query(`DROP INDEX "IDX_31e2fd7720a2da3af586f17778"`);
        await queryRunner.query(`ALTER TABLE "account" RENAME TO "temporary_account"`);
        await queryRunner.query(`CREATE TABLE "account" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, "amount" integer NOT NULL, "currency" text, CONSTRAINT "UQ_1aaa9c6e960421d088610e487cd" UNIQUE ("name", "ledgerId", "deletedAt"))`);
        await queryRunner.query(`INSERT INTO "account"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId", "amount", "currency") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId", "amount", "currency" FROM "temporary_account"`);
        await queryRunner.query(`DROP TABLE "temporary_account"`);
        await queryRunner.query(`CREATE INDEX "IDX_d83bc879aa5ef4074e71031662" ON "account" ("ledgerId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_414d4052f22837655ff312168c" ON "account" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_f50e152d11f027ee500dbad6c9" ON "account" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_31e2fd7720a2da3af586f17778" ON "account" ("uuid") `);
        await queryRunner.query(`DROP INDEX "IDX_46a672210083f21abc60d2866b"`);
        await queryRunner.query(`DROP INDEX "IDX_a21c3af32b2379186183e0c71b"`);
        await queryRunner.query(`DROP INDEX "IDX_5cd94fff677acfd7f4cd97cacf"`);
        await queryRunner.query(`DROP INDEX "IDX_10f36cf762167a0b4ba11783c2"`);
        await queryRunner.query(`ALTER TABLE "ledger" RENAME TO "temporary_ledger"`);
        await queryRunner.query(`CREATE TABLE "ledger" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "userId" integer, CONSTRAINT "UQ_c19f04f83dfe9cb88f959188445" UNIQUE ("name", "userId", "deletedAt"))`);
        await queryRunner.query(`INSERT INTO "ledger"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "userId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "userId" FROM "temporary_ledger"`);
        await queryRunner.query(`DROP TABLE "temporary_ledger"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_46a672210083f21abc60d2866b" ON "ledger" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_a21c3af32b2379186183e0c71b" ON "ledger" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5cd94fff677acfd7f4cd97cacf" ON "ledger" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_10f36cf762167a0b4ba11783c2" ON "ledger" ("uuid") `);
        await queryRunner.query(`DROP INDEX "IDX_060e989c9ab11a9995d95cf734"`);
        await queryRunner.query(`DROP INDEX "IDX_23c05c292c439d77b0de816b50"`);
        await queryRunner.query(`DROP INDEX "IDX_c15e0393f5bebfb602fb077897"`);
        await queryRunner.query(`DROP INDEX "IDX_86ee096735ccbfa3fd319af183"`);
        await queryRunner.query(`ALTER TABLE "category" RENAME TO "temporary_category"`);
        await queryRunner.query(`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, CONSTRAINT "UQ_1c705c6b6388c95c22c103d15e8" UNIQUE ("name", "ledgerId", "deletedAt"))`);
        await queryRunner.query(`INSERT INTO "category"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId" FROM "temporary_category"`);
        await queryRunner.query(`DROP TABLE "temporary_category"`);
        await queryRunner.query(`CREATE INDEX "IDX_060e989c9ab11a9995d95cf734" ON "category" ("ledgerId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_23c05c292c439d77b0de816b50" ON "category" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_c15e0393f5bebfb602fb077897" ON "category" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_86ee096735ccbfa3fd319af183" ON "category" ("uuid") `);
        await queryRunner.query(`DROP INDEX "IDX_d3951864751c5812e70d033978"`);
        await queryRunner.query(`DROP INDEX "IDX_ac8efff1e2135ddfd0ab1796c5"`);
        await queryRunner.query(`DROP INDEX "IDX_3d6e89b14baa44a71870450d14"`);
        await queryRunner.query(`DROP INDEX "IDX_f74e18cc3832e2b39ea077a6c8"`);
        await queryRunner.query(`DROP INDEX "IDX_83cb622ce2d74c56db3e0c29f1"`);
        await queryRunner.query(`DROP INDEX "IDX_fcce0ce5cc7762e90d2cc7e230"`);
        await queryRunner.query(`ALTER TABLE "transaction" RENAME TO "temporary_transaction"`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "transferType" varchar CHECK( transferType IN ('0','-1','1') ) NOT NULL DEFAULT (-1), "amount" integer NOT NULL, "date" datetime NOT NULL, "toAmount" integer, "accountId" integer, "toAccountId" integer, "categoryId" integer, "payeeId" integer)`);
        await queryRunner.query(`INSERT INTO "transaction"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "transferType", "amount", "date", "toAmount", "accountId", "toAccountId", "categoryId", "payeeId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "transferType", "amount", "date", "toAmount", "accountId", "toAccountId", "categoryId", "payeeId" FROM "temporary_transaction"`);
        await queryRunner.query(`DROP TABLE "temporary_transaction"`);
        await queryRunner.query(`CREATE INDEX "IDX_d3951864751c5812e70d033978" ON "transaction" ("categoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ac8efff1e2135ddfd0ab1796c5" ON "transaction" ("toAccountId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3d6e89b14baa44a71870450d14" ON "transaction" ("accountId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f74e18cc3832e2b39ea077a6c8" ON "transaction" ("date") `);
        await queryRunner.query(`CREATE INDEX "IDX_83cb622ce2d74c56db3e0c29f1" ON "transaction" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fcce0ce5cc7762e90d2cc7e230" ON "transaction" ("uuid") `);
        await queryRunner.query(`DROP INDEX "IDX_294557973b2301e41a7896b421"`);
        await queryRunner.query(`DROP INDEX "IDX_09f0437c922d2ab625f650a6b6"`);
        await queryRunner.query(`DROP INDEX "IDX_07e969c162fe18103ef44dd074"`);
        await queryRunner.query(`DROP INDEX "IDX_3e71d4e5c776c2210a6c00033e"`);
        await queryRunner.query(`ALTER TABLE "payee" RENAME TO "temporary_payee"`);
        await queryRunner.query(`CREATE TABLE "payee" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar NOT NULL, "description" text, "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "version" integer NOT NULL, "name" varchar(256) NOT NULL, "ledgerId" integer, CONSTRAINT "UQ_b82ccd31f8dce1a9caa80c22c31" UNIQUE ("name", "ledgerId", "deletedAt"))`);
        await queryRunner.query(`INSERT INTO "payee"("id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId") SELECT "id", "uuid", "description", "deletedAt", "createdAt", "updatedAt", "version", "name", "ledgerId" FROM "temporary_payee"`);
        await queryRunner.query(`DROP TABLE "temporary_payee"`);
        await queryRunner.query(`CREATE INDEX "IDX_294557973b2301e41a7896b421" ON "payee" ("ledgerId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_09f0437c922d2ab625f650a6b6" ON "payee" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_07e969c162fe18103ef44dd074" ON "payee" ("createdAt") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_3e71d4e5c776c2210a6c00033e" ON "payee" ("uuid") `);
        await queryRunner.query(`DROP INDEX "IDX_d83bc879aa5ef4074e71031662"`);
        await queryRunner.query(`DROP INDEX "IDX_414d4052f22837655ff312168c"`);
        await queryRunner.query(`DROP INDEX "IDX_f50e152d11f027ee500dbad6c9"`);
        await queryRunner.query(`DROP INDEX "IDX_31e2fd7720a2da3af586f17778"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP INDEX "IDX_46a672210083f21abc60d2866b"`);
        await queryRunner.query(`DROP INDEX "IDX_a21c3af32b2379186183e0c71b"`);
        await queryRunner.query(`DROP INDEX "IDX_5cd94fff677acfd7f4cd97cacf"`);
        await queryRunner.query(`DROP INDEX "IDX_10f36cf762167a0b4ba11783c2"`);
        await queryRunner.query(`DROP TABLE "ledger"`);
        await queryRunner.query(`DROP INDEX "IDX_060e989c9ab11a9995d95cf734"`);
        await queryRunner.query(`DROP INDEX "IDX_23c05c292c439d77b0de816b50"`);
        await queryRunner.query(`DROP INDEX "IDX_c15e0393f5bebfb602fb077897"`);
        await queryRunner.query(`DROP INDEX "IDX_86ee096735ccbfa3fd319af183"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP INDEX "IDX_d3951864751c5812e70d033978"`);
        await queryRunner.query(`DROP INDEX "IDX_ac8efff1e2135ddfd0ab1796c5"`);
        await queryRunner.query(`DROP INDEX "IDX_3d6e89b14baa44a71870450d14"`);
        await queryRunner.query(`DROP INDEX "IDX_f74e18cc3832e2b39ea077a6c8"`);
        await queryRunner.query(`DROP INDEX "IDX_83cb622ce2d74c56db3e0c29f1"`);
        await queryRunner.query(`DROP INDEX "IDX_fcce0ce5cc7762e90d2cc7e230"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP INDEX "IDX_294557973b2301e41a7896b421"`);
        await queryRunner.query(`DROP INDEX "IDX_09f0437c922d2ab625f650a6b6"`);
        await queryRunner.query(`DROP INDEX "IDX_07e969c162fe18103ef44dd074"`);
        await queryRunner.query(`DROP INDEX "IDX_3e71d4e5c776c2210a6c00033e"`);
        await queryRunner.query(`DROP TABLE "payee"`);
        await queryRunner.query(`DROP INDEX "IDX_e12875dfb3b1d92d7d7c5377e2"`);
        await queryRunner.query(`DROP INDEX "IDX_da5934070b5f2726ebfd3122c8"`);
        await queryRunner.query(`DROP INDEX "IDX_e11e649824a45d8ed01d597fd9"`);
        await queryRunner.query(`DROP INDEX "IDX_a95e949168be7b7ece1a2382fe"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
