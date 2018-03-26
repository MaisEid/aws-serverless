
import { success, failure } from "./libs/response-lib";
const { Client } = require('pg');


export async function main(event, context, callback) {


    try {
        var client = new pg.Client(conn);
        await client.connect();

        console.log("Connected to PostgreSQL database");
        const res = await client.query('SELECT * from locations');
        console.log(res.rows);
   
        callback(null, success(res.rows));
    }
    catch (e) {
      
        callback(null, failure(e));
    }

}