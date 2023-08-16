const { user } = require('../models')

class controllerUser{
    static async read(req,response){
        try {
            let data = await user.findAll()
            response.status(200).json(data)
        } catch (error) {
            response.status(500).json({ message: "Internal Server Error" })
        }
    }
    static async add(req,response){
        try {
            let { date_of_birth, full_name, address, phone, email, active } = req.body
            let data = await user.create({date_of_birth, full_name, address, phone, email, active })
            response.status(201).json({message:"Add User Success"})
        } catch (error) {
            response.status(500).json({ message: "Internal Server Error" })
        }
    }
    static async update(req,response){
        try {
            let { id } = req.params
            let userData = await user.findByPk(id)
            if(!userData){
                throw {name : "DataNotFound"}
            }
            let { date_of_birth, full_name, address, phone, email, active } = req.body
            let data = await user.update({date_of_birth, full_name, address, phone, email, active},{where:{id}})
            response.status(200).json({message:"Update user success"}) 
        } catch (error) {
            if(error.name === "DataNotFound"){
                response.status(404).json({message : "Data Not Found"})
            }else{
                response.status(500).json({ message: "Internal Server Error" })
            }
        }
    }
    static async deleteUser(req,response){
        try {
            let { id } = req.params
            let data = await user.findByPk(id)
            if(data===null){
                throw{
                    title : "DATANOTVALID",
                    message : "NOT FOUND"
                }
            }
            await user.destroy({where:{id}})
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

module.exports=controllerUser