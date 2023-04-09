import express, { Request, Response } from 'express';
import mysql from 'mysql'; 


let db_config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yantra-aws',
    connectionLimit: 5,
    multipleStatements: true  
}


 var pool = mysql.createPool(db_config);

export {pool}