const { Activity } = require("../db.js");

const newActivity = async({ name, difficulty, duration, season, country }) => {
    
    const activity = await Activity.create({ name, difficulty, duration, season })
    activity.addCountry(country)
    return activity;
}

const findAllActivities = async() => {
    const allActivities = await Activity.findAll();
    return allActivities
}

const findActivity = async(country) => {
    const activitiesFound = await Activity.findAll({where: {name: country }})
    return activitiesFound
}


module.exports = {
    newActivity,
    findAllActivities,
    findActivity
}