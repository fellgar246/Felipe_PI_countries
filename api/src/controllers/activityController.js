const { Activity } = require("../db.js");

const addActivity = async(activity) => {
    //TODO: Relacionar Actividades con paises
    const newActivity = await Activity.create(activity)
    return newActivity;
}

const findAllActivities = async() => {
    const allActivities = await Activity.findAll();
    return allActivities
}

module.exports = {
    addActivity,
    findAllActivities
}