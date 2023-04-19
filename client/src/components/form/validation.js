// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPass = new RegExp("[0-9]");

export function validation(inputs) {
  const errors = {}
    if(!inputs.name) errors.name = 'Activity name is required ';
    if(!inputs.type) errors.type = 'Please choose an activity type';
    if(!inputs.difficulty) errors.difficulty = 'Please choose a difficulty number';
    if(inputs.duration <= 0) errors.duration = 'Duration must be more than cero';
    if(!inputs.duration) errors.duration = 'Duration of the activity is required';
    if(inputs.duration >= 24) errors.duration = 'Duration cannot be 24hrs o more';
    if(!inputs.season) errors.season = 'Please select a season';
    if(!inputs.country.length) errors.country = 'A country or countries are required';

  return errors;
}

export const typeOptions = [
    "Cultural", 
    "Religious", 
    "Gastronomic", 
    "Idiomatic", 
    "Health", 
    "Sports", 
    "Theme park", 
    "Business"
]
    
export const difficultyOptions = [
    1, 2, 3, 4, 5
]



