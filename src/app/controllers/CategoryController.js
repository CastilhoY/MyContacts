const { request } = require('express')
const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController{
    async index(request, response){
        const categories = await CategoriesRepository.findAll()
        response.json(categories)
    }

    async store(request, response){
        const { name } = request.body

        if (!name){
            return response.status(400).json({ error: 'Name is required'})
        }

        const category = await CategoriesRepository.create({ name })

        response.json(category)
    }

    async update(request, response){
        const { id } = request.params
        const { name } = request.body

        const categoryExists = await CategoriesRepository.findById(id)

        if (!categoryExists){
            return response.status(400).json({ error: 'Category not found' })
        }
        if (!name){
            return response.status(400).json({ error: 'Name not found' })
        }

        const category = await CategoriesRepository.update(id, { name })

        response.json(category)
    }

    async delete(request, response){
        const { id } = request.params

        const categoryExists = await CategoriesRepository.findById(id)
        if (!categoryExists){
            return response.status(400).json({ error: 'Category not found' })
        }
        await CategoriesRepository.delete(id)
        response.sendStatus(204)
    }
}

module.exports = new CategoryController();
