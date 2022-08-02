import 'module-alias/register';
import http, { Server } from 'http';

import app from '_config/app';
import config from '_config/config';
import connect from '_config/database';
import logger from '_helpers/logger';

const server: Server = http.createServer(app);

(async () => {
  await connect(config.mongo_uri).then(() => logger.info('Database connected...'));
  server.listen(config.port, () => logger.info('Server listening on port ' + config.port));
})();
