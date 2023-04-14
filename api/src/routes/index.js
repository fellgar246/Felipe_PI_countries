const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { allCountriesRouter, countryByNameRouter, countryByIdRouter} = require('./countryRouter');
const {  addActivityRouter, allActivities } = require('./activityRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/countries", allCountriesRouter );
router.get("/countries/name", countryByNameRouter );
router.get("/countries/:idPais", countryByIdRouter );

router.post("/activities", addActivityRouter);
router.get("/activities", allActivities )

module.exports = router;
