import { createPool } from 'mysql2/promise';

export async function connect() {
    let db_config = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'yantra-aws',
        connectionLimit: 5,
        multipleStatements: true  
    }

    const connection = await createPool(db_config);
        // host: 'localhost',
        // user: 'root',
        // password: '123456',
        // database: 'demo_all',
        // connectionLimit: 10
    // });
    
    return connection;

}