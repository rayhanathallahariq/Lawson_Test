const { Merchant } = require('../models')

class controllerMerchant {
    static async read(req, response) {
        try {
            let data = await Merchant.findAll()
            response.status(200).json(data)
        } catch (error) {
            response.status(500).json({ message: "Internal Server Error" })
        }
    }
    static async add(req, response) {
        try {
            let { merchant_name, city_id, address, phone, expired_date } = req.body
            let data = await Merchant.create({ merchant_name, city_id, address, phone, expired_date })
            response.status(201).json({ message: " Add Merchant Success" })
        } catch (error) {
            response.status(500).json({ message: "Internal Server Error" })
        }
    }
}

module.exports = controllerMerchant