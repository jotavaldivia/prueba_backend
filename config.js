import dotenv from 'dotenv';

dotenv.config();

export const HOST = process.env.HOST
export const USER = process.env.USER
export const PASSWORD = process.env.PASSWORD
export const DATABASE = process.env.DATABASE
export const PORT_DB = process.env.PORT_DB
export const PORT_SERVER = process.env.PORT_SERVER