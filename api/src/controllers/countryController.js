const { Country } = require("../db.js");

const findAllCountries = async() => {
    const allCountries = await Country.findAll();
    return allCountries
}

const countryById = async(idPais) => {
    //TODO: Revisar si se agrega ToLowerCase
    const country = await Country.findByPk(idPais)
    if(!country) throw Error("País no encontrado por Id")
    return country 
}

const countryByName = async(name) => {
    const country = await Country.findOne({where: {name: name }});
    if(!country) throw Error("País no encontrado por nombre")
    return country 
}

module.exports = {
    findAllCountries,
    countryById,
    countryByName
}