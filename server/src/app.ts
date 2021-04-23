import express from 'express';

import db from 'database';
import config from '@config';

import article from 'routes/v1/article';

(async () => {
    try {
        await db.sync({ force: false, alter: true });

        const app = express();
        app.use(express.json());
        app.use('/api/v1/article', article);

        app.listen(config.server.port, config.server.host, () => {
            console.log('Server started   ✔');
        });
    } catch (error) {
        console.error(error);
    }
})();
