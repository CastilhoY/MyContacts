const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController')
const CategoryController = require('./app/controllers/CategoryController')

const router = Router()

router.get('/contacts',ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);


module.exports = router
