const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// rutas
router.get('/', itemController.getAllItems);
router.get('/create', itemController.showCreateItem);
router.post('/create', itemController.createItem);
router.get('/edit/:id', itemController.showEditItem);
router.post('/edit/:id', itemController.updateItem);
router.get('/delete/:id', itemController.deleteItem);

module.exports = router;