import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
  entities: ['./dist/entities'],
  dbName: 'time-registration',
  type: 'postgresql',
  user: 'admin',
  password: 'root',
});
