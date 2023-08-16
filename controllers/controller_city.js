const { city } = require('../models')

class controllerCity{
    static async read(req,response){
        try {
            let data = await city.findAll()
            response.status(200).json(data)
        } catch (error) {
            response.status(500).json({ message: "Internal Server Error" })
        }
    }
    static async add(req,response){
        try {
            let { name, longitude, latitude } = req.body
            let data = await city.create({name, longitude, latitude})
            response.status(201).json({message:"Add City Success"})
        } catch (error) {
            response.status(500).json({ message: "Internal Server Error" })
        }
    }
    static async update(req,response){
        try {
            let { id } = req.params
            let cityData = await city.findByPk(id)
            if(!cityData){
                throw {name : "Data Not Found"}
            }
            let { name, longitude, latitude } = req.body
            let data = await city.update({name, longitude, latitude},{where:{id}})
            response.status(200).json({message:"Update city success"}) 
        } catch (error) {
            response.status(500).json({ message: "Internal Server Error" })
        }
    }
    static async deleteCity(req,response){
        try {
            let { id } = req.params
            let data = await city.findByPk(id)
            if(data===null){
                throw{
                    title : "DATANOTVALID",
                    message : "NOT FOUND"
                }
            }
            await city.destroy({where:{id}})
            response.status(200).json({message:"Success Delete"})
        } catch (error) {
            if(error.name === "DATANOTVALID"){
                response.status(404).json({message : error.message})
            } else {
                response.status(500).json({ message: "Internal Server Error" })
            }
        }
    }
}

module.exports=controllerCity