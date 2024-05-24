const { categoria } = require('../models');
let self = {}

self.getAll = async (req, res) => {
    try {
        let data = await categoria.findAll({ attributes: [['id', 'categoriaid'], 'nombre', 'protegida'] });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.get = async (req, res) => {
    try {
        let data = await categoria.findByPk(req.params.id, { attributes: [['id', 'categoriaid'], 'nombre', 'protegida'] });
        if (data) {
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.create = async (req, res) => {
    try {
        let data = await categoria.create(req.body.nombre);
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.update = async (req, res) => {
    try {
        let data = await categoria.findByPk(req.params.id);
        if (data) {
            await data.update(req.body);
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.delete = async (req, res) => {
    try {
        let data = await categoria.findByPk(req.params.id);
        if (data) {
            if (data.protegida) {
                return res.status(403).json({ message: 'Categoría protegida' });
            } else {
                await data.destroy();
                return res.status(204).json();
            }
        } else {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = self;