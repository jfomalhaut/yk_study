const mysql = require('mysql');
require('dotenv').config();

let conn = '';
let sql = '';

const info = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

console.log(info);

const handleDisconnect = () => {
    conn = mysql.createConnection(info);
    conn.connect((err, result, fileds) => {
        if (err) {
            console.log('error message: ' + err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    conn.on('error', (err) => {
        if (err.code === 'PROTOCAL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    })
}

handleDisconnect();

module.exports.getData = (req, res) => {
    sql = `SELECT * FROM product`;
    conn.query(sql, (err, data) => {
        if (err) {
            res.send({ result : false, error: err });
        } else {
            res.send({ result : true, data });
            
        }
    })
}

module.exports.getDetail = (req, res) => {
    const { body: { id } } = req;
    sql = `SELECT * FROM product WHERE id = ? `;
    conn.query(sql, [id], (err, data) => {
        if (err) {
            res.send({ result : false, error: err });
        } else {
            res.send({ result : true, data });
            
        }       
    });
};


module.exports.login = (req, res) => {
    const { body: { username, password } } = req;
    sql = `SELECT * FROM user WHERE username = ? AND password = ?`;
    conn.query(sql, [username, password], (err, data) => {
        if (err) {
            res.send({ result: false, error: err });
        } else {
            res.send({ result: true, data: data.length > 0 ? data : [] });
        }
    })
}