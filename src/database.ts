import { Sequelize } from 'sequelize';

import config from '@config';

const database = new Sequelize({
    ...config.db,
    logging: false,
});

try {
    database.authenticate();
} catch (error) {
    console.error(error);
} finally {
    console.log('Database started ✔');
}

export default database;
