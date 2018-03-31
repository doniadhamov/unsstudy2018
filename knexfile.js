// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
        database: 'unsstudy2018',
        user: 'postgres',
        password: '1',
        port: '5433'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
