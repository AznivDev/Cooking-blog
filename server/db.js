import mysql from 'mysql2'

export const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1:3306',
    password: 'azniv11/',
    database: 'blog',
})

db.connect( (err)=> {
    if(err) {
        throw err;
    }
    console.log('MySQL database is connected successfuly')
})

