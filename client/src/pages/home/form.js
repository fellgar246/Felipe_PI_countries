
const data = [
    {
        "id": "MEX",
        "name": "Mexico",
        "image": "https://flagcdn.com/mx.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"Mexico City\"}",
        "subregion": "North America",
        "area": 1964375,
        "population": 128932753,
        "Activities": [
            {
                "id": 1,
                "name": "Caminar",
                "type": "Business",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-14T21:58:37.429Z",
                    "updatedAt": "2023-04-14T21:58:37.429Z",
                    "CountryId": "MEX",
                    "ActivityId": 1
                }
            },
            {
                "id": 1,
                "name": "Caminar",
                "type": "Cultural",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-14T21:58:37.429Z",
                    "updatedAt": "2023-04-14T21:58:37.429Z",
                    "CountryId": "BRA",
                    "ActivityId": 1
                }
            },
        ]
    },
    {
        "id": "BRA",
        "name": "Brazil",
        "image": "https://flagcdn.com/br.svg",
        "continent": "{\"South America\"}",
        "capital": "{Brasília}",
        "subregion": "South America",
        "area": 8515767,
        "population": 212559409,
        "Activities": [
            {
                "id": 1,
                "name": "Caminar",
                "type": "Cultural",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-14T21:58:37.429Z",
                    "updatedAt": "2023-04-14T21:58:37.429Z",
                    "CountryId": "BRA",
                    "ActivityId": 1
                }
            },
            {
                "id": 3,
                "name": "Caminar",
                "type": "Health",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-14T21:58:37.429Z",
                    "updatedAt": "2023-04-14T21:58:37.429Z",
                    "CountryId": "BRA",
                    "ActivityId": 1
                }
            }

        ]
    },
    {
        "id": "GIB",
        "name": "Gibraltar",
        "image": "https://flagcdn.com/gi.svg",
        "continent": "{Europe}",
        "capital": "{Gibraltar}",
        "subregion": "Southern Europe",
        "area": 6,
        "population": 33691,
        "Activities": []
    }
]

const handlerOrder = (data) => {
    //return data.sort((a,b) => a.name - b.name);
    //return data.sort((a,b) => b.id - a.id)
    data.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
}

//console.log(handlerOrder(data))


//console.log(data.map(e => e.Activities.map(a => a.type)))

//console.log(data.map(e => e.Activities.map(a => a.type === "Business" ? e : [] ) ))

//*OK
//console.log(data.map(e => e.Activities.filter(a => a.type === "Business").length ? e : {} ))
//*OK
//console.log(data.map(e => e.Activities.map(a => a.type  === "Cultural" ).length && e  ))

// const data1 = data.map(e => e.Activities.filter(a => a.type  === "Cultural"));
// const data2 = data.filter(e => e.Activities.filter(a => a.type  === "Cultural").length > 0).flat();

//descendente
// console.log(data.sort(function(a, b){
//     if(a.name < b.name) { return -1; }
//     if(a.name > b.name) { return 1; }
//     return 0;
// }));

//ascendente
console.log(data.sort(function(a, b){
    if(a.name < b.name) { return 1; }
    if(a.name > b.name) { return -1; }
    return 0;
}));