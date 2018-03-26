const { Client } = require('pg')

const conn = "postgres://username:password@hostname/databasename";

export function call(action, params) {
    var client = new pg.Client(conn);
    await client.connect();
    const result = client[action](params).promise();
    await client.end();

    return result

}