const Item = require('../models/itemModel');

// mostrar todos los items
exports.getAllItems = (req, res) => {
    Item.getAll((err, items) => {
      if (err) throw err;
      res.render('index', { items });
    });
  };

// mostrar vista de creación de item
exports.showCreateItem = (req, res) => {
    res.render('create');
  };

// crear item
exports.createItem = (req, res) => {
    const { name, price, description } = req.body;
    Item.create({ name, price, description }, (err) => {
      if (err) throw err;
      res.redirect('/');
    });
  };

// mostrar vista de edición de item
exports.showEditItem = (req, res) => {
    const id = req.params.id;
    Item.getById(id, (err, results) => {
      if (err) throw err;
      const item = results[0];
      res.render('edit', { item });
    });
  };
  
// actualizar item
  exports.updateItem = (req, res) => {
    const id = req.params.id;
    const { name, price, description } = req.body;
    Item.update(id, { name, price, description }, (err) => {
      if (err) throw err;
      res.redirect('/');
    });
  };
  
// borrar item
  exports.deleteItem = (req, res) => {
    const id = req.params.id;
    Item.delete(id, (err) => {
      if (err) throw err;
      res.redirect('/');
    });
  };