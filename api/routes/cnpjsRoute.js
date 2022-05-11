const { Router } = require('express');
const CnpjController = require('../../controllers/CnpjController');

const router = Router();

router.get('/cnpjs', CnpjController.listarCnpjs)

module.exports = router;