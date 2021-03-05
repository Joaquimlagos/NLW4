import { Connection, createConnection, getConnectionOptions } from 'typeorm';

const typeorm = require("typeorm");
export default async (): Promise<Connection> => {
    const defaultOptions = await typeorm.getConnectionOptions();

    return typeorm.createConnection(
        Object.assign(defaultOptions, {
            database:process.env.NODE_ENV === "test"
             ? "./src/database/database.test.sqlite" : defaultOptions.database,
        })
    );
};

