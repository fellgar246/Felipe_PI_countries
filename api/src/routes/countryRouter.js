const { findAllCountries, countryById, countryByName } = require('../controllers/countryController');


const allCountriesRouter = async(req, res) => {
    try {
        const countries = await findAllCountries()
        res.status(200).json(countries);
       
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const countryByIdRouter =  async(req, res) => {
    const { idPais } = req.params;
    try {
        const country = await countryById(idPais);
        res.status(200).json(country)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const countryByNameRouter = async(req, res) => {
    try {
        let name = ""
        const urlParams = new URLSearchParams(req.url);
        for (const value of urlParams.values()) {
            name = value
        }
        const country = await countryByName(name);
        res.status(200).json(country)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

module.exports = {
    allCountriesRouter,
    countryByNameRouter,
    countryByIdRouter
}