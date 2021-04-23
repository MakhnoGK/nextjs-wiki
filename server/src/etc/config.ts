import { Dialect } from "sequelize/types";

const config = {
    server: {
        host: '0.0.0.0',
        port: 4000
    },
    db: {
        dialect: 'postgres' as Dialect,
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'wiki'
    }
};

export default config;
