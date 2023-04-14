const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const findAllCountries = async() => {
    const allCountries = await Country.findAll();
    return allCountries
}

const countryById = async(idPais) => {
    const id = idPais.toUpperCase()
    const country = await Country.findByPk(id,{include: Activity} )
    if(!country) throw Error("País no encontrado por Id")
    return country 
}

const countryByName = async(name) => {
    const country = await Country.findAll({
        where: {
            name: {[Op.iLike]: '%'+name+'%' },
        },
        include: Activity
    });
    if(!country) throw Error("País no encontrado por nombre")
    return country 
}

module.exports = {
    findAllCountries,
    countryById,
    countryByName
}