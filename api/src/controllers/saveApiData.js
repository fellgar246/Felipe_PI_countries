const axios = require("axios");
const { Country } = require("../db.js");

const getApiData = async () => {
    try {
        const apiData = await axios('https://restcountries.com/v3/all');
        const allCountries = apiData.data.map(country => {
            return {
                id: country.cca3 ,
                name: country.name.common ,
                image: country.flags[0],
                continent: country.continents,
                capital: country.capital ? country.capital: null ,
                subregion: country.subregion ? country.subregion: null ,
                area: country.area ? country.area : null,
                population: country.population,
            }
        })
        return allCountries

    } catch (error) {
        return {msg: error.message};
    }
}

const saveApiData = async() => {
    try {
        const allCountries = await getApiData();
        await Country.bulkCreate(allCountries);
    } catch (error) {
        return {msg: error.message};
    }
}

module.exports = saveApiData;