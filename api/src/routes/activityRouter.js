const { addActivity, findAllActivities } = require('../controllers/activityController')

const  addActivityRouter = async(req,res) => {
    try {
        const { name, difficulty, duration, season } = req.body;
        const newActivity = await addActivity({ name, difficulty, duration, season });
        res.status(201).json(newActivity);
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
    allActivities
}