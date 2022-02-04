const db = require('../data/db-config')

async function getAllPlants(){
    const plant = await db('plants')
}

async function getPlantId(){
    const plantId = await db('plants as p')
        .where('plant_id', plant_id)
        .first()
}



module.exports = {
    getAllPlants,
    getAllPlants,

}