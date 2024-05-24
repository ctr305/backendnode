const { pelicula, categoria } = require('../models');
const Sequelize = require('../models').sequelize;
const Op = Sequelize.Op;

let self = {}

self.getAll = async (req, res) => {
    try {
        // Recibe el paramentro de búsqueda
        const { s } = req.query;

        // Recibe filtros de categoría
        const filters = { }
        if (s) {
            filters.titulo = { [Op.like]: `%${s}%` }
        }

        let data = await pelicula.findAll({
            attributes: [['id', 'peliculaid'], 'titulo', 'sinopsis', 'anio', 'poster'],
            include: [{
                model: categoria,
                as: 'categoria',
                attributes: [['id', 'categoriaid'], 'nombre', 'protegida'],
                through: { attributes: [] }
            }],
            subQuery: false
        });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

self.get = async (req, res) => {
    try {
        let data = await pelicula.findByPk(req.params.id, {     attributes: ['id', 'titulo', 'anio', 'poster'],
            include: {
                model: categoria,
                as: 'categoria',
                attributes: [['id', 'categoriaId'], 'nombre'],
                through: { attributes: [] }
            },
            subQuery: false
        });
        if (data) {
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.create = async (req, res) => {
    try {
        let data = await pelicula.create({
            titulo: req.body.titulo,
            sinopsis: req.body.sinopsis,
            anio: req.body.anio,
            poster: req.body.poster
        });
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.update = async (req, res) => {
    try {
        let data = await pelicula.findByPk(req.params.id);
        if (data) {
            await data.update(req.body);
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.delete = async (req, res) => {
    try {
        let data = await pelicula.findByPk(req.params.id);
        if (data) {
            await data.destroy();
            return res.status(204).json();
        } else {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.asignaCategoria = async (req, res) => {
    try {
        let data = await pelicula.findByPk(req.params.id);
        if (data) {
            let categoriaData = await categoria.findByPk(req.body.categoriaId);
            if (categoriaData) {
                await data.addCategoria(categoriaData);
                return res.status(200).json();
            } else {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
        } else {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

self.eliminaCategoria = async (req, res) => {
    try {
        let data = await pelicula.findByPk(req.params.id);
        if (data) {
            let categoriaData = await categoria.findByPk(req.params.categoriaId);
            if (categoriaData) {
                await data.removeCategoria(categoriaData);
                return res.status(204).json();
            } else {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
        } else {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = self;