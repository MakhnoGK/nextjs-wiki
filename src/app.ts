import express from 'express';

import db from 'database';
import config from '@config';

(async () => {
    try {
        await db.sync({ force: true });

        const app = express();

        app.listen(config.server.port, config.server.host, () => {
            console.log('Server started   ✔');
        });
    } catch (error) {
        console.error(error);
    }
})();
