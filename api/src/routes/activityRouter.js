const { newActivity, findAllActivities } = require('../controllers/activityController')

const  addActivityRouter = async(req,res) => {
    try {
        const { name, type, difficulty, duration, season, country } = req.body;
        const addActivity = await newActivity({ name, type, difficulty, duration, season, country });
        res.status(201).json(addActivity);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const allActivities = async (req, res) => {
    try {
        const activites = await findAllActivities()
        res.status(200).json(activites);

    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

module.exports = {
    addActivityRouter,
    allActivities,
}