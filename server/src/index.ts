import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import config from './mikro-orm.config';
import { RequestContext } from '@mikro-orm/core/utils';

const app = express();

(async () => {
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ limit: '5mb', extended: false }));

  const orm = await MikroORM.init<PostgreSqlDriver>(config);

  const server = new ApolloServer({});

  app.use((_, __, next) => {
    RequestContext.create(orm.em, next);
  });

  await server.start();
  server.applyMiddleware({ app });
})();

export default app;
