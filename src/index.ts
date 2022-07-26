import 'module-alias/register';
import http, { Server } from 'http';

import app from '_config/app';
import logger from '_helpers/logger';

const port = process.env.PORT || 3000;

const server: Server = http.createServer(app);

(async () => {
  server.listen(port, () => logger.info('Server listening on port ' + port));
})();
