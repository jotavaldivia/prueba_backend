import { createPool } from 'mysql2/promise';
import {
    HOST,
    USER,
    PASSWORD,
    DATABASE,
    PORT_DB
} from './config.js';

console.log(process.env.HOST)

export const pool = createPool({
    host:HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT_DB,  
});



