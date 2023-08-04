const mysql =require('mysql');

const connection = mysql.createConnection({

    host : 'localhost',
    database : 'login',
    user: 'root',
    password : 'Dev@958988'
});

connection.connect(function(error){

    if(error)
    {
        throw error;

    }
    else{
        console.log('MySQL database is connected Succesful');
    }
});

module.exports = connection;