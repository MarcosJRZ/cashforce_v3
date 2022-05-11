const database = require('../models');

class CnpjController {
    static async listarCnpjs(req, res) {
        try {
            const todosCnpjs = await database.cnpjs.findAll();
            return res.status(200).json(todosCnpjs)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CnpjController;