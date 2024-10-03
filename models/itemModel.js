const mysql = require('mysql2');

// conexión a db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlpass974.',
    database: 'tienda'
  });

  db.connect((err) => {
    if (err) {
      console.error('Conexión fallida: ' + err.stack);
      return;
    }
    console.log('Conexión exitosa');
  });

  // métodos del modelo
  const Item = {
    getAll: (callback) => {
      db.query('SELECT * FROM items', callback);
    },
    getById: (id, callback) => {
      db.query('SELECT * FROM items WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
      const { name, price, description } = data;
      db.query('INSERT INTO items (nombre, precio, descripcion) VALUES (?, ?, ?)', [name, price, description], callback);
    },
    update: (id, data, callback) => {
      const { name, price, description } = data;
      db.query('UPDATE items SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?', [name, price, description, id], callback);
    },
    delete: (id, callback) => {
      db.query('DELETE FROM items WHERE id = ?', [id], callback);
    }
  };
  
  module.exports = Item;