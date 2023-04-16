//TODO: !BORAR
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
// console.log(data.sort(function(a, b){
//     if(a.name < b.name) { return 1; }
//     if(a.name > b.name) { return -1; }
//     return 0;
// }));

//*Continent

const data2 = [
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
                "type": "Business",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-15T15:24:41.870Z",
                    "updatedAt": "2023-04-15T15:24:41.870Z",
                    "CountryId": "BRA",
                    "ActivityId": 1
                }
            }
        ]
    },
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
                    "createdAt": "2023-04-15T15:24:41.870Z",
                    "updatedAt": "2023-04-15T15:24:41.870Z",
                    "CountryId": "MEX",
                    "ActivityId": 1
                }
            },
            {
                "id": 2,
                "name": "Caminar",
                "type": "Cultural",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-15T15:25:21.645Z",
                    "updatedAt": "2023-04-15T15:25:21.645Z",
                    "CountryId": "MEX",
                    "ActivityId": 2
                }
            }
        ]
    },
    {
        "id": "FRA",
        "name": "France",
        "image": "https://flagcdn.com/fr.svg",
        "continent": "{Europe}",
        "capital": "{Paris}",
        "subregion": "Western Europe",
        "area": 551695,
        "population": 67391582,
        "Activities": [
            {
                "id": 2,
                "name": "Caminar",
                "type": "Cultural",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-15T15:25:21.645Z",
                    "updatedAt": "2023-04-15T15:25:21.645Z",
                    "CountryId": "FRA",
                    "ActivityId": 2
                }
            }
        ]
    },
    {
        "id": "KEN",
        "name": "Kenya",
        "image": "https://flagcdn.com/ke.svg",
        "continent": "{Africa}",
        "capital": "{Nairobi}",
        "subregion": "Eastern Africa",
        "area": 580367,
        "population": 53771300,
        "Activities": [
            {
                "id": 2,
                "name": "Caminar",
                "type": "Cultural",
                "difficulty": 1,
                "duration": 4,
                "season": "Summer",
                "CountryActivity": {
                    "createdAt": "2023-04-15T15:25:21.645Z",
                    "updatedAt": "2023-04-15T15:25:21.645Z",
                    "CountryId": "KEN",
                    "ActivityId": 2
                }
            }
        ]
    },
    {
        "id": "ATF",
        "name": "French Southern and Antarctic Lands",
        "image": "https://flagcdn.com/tf.svg",
        "continent": "{Antarctica}",
        "capital": "{Port-aux-Français}",
        "subregion": null,
        "area": 7747,
        "population": 400,
        "Activities": []
    },
    {
        "id": "COL",
        "name": "Colombia",
        "image": "https://flagcdn.com/co.svg",
        "continent": "{\"South America\"}",
        "capital": "{Bogotá}",
        "subregion": "South America",
        "area": 1141748,
        "population": 50882884,
        "Activities": []
    },
    {
        "id": "VEN",
        "name": "Venezuela",
        "image": "https://flagcdn.com/ve.svg",
        "continent": "{\"South America\"}",
        "capital": "{Caracas}",
        "subregion": "South America",
        "area": 916445,
        "population": 28435943,
        "Activities": []
    },
    {
        "id": "TJK",
        "name": "Tajikistan",
        "image": "https://flagcdn.com/tj.svg",
        "continent": "{Asia}",
        "capital": "{Dushanbe}",
        "subregion": "Central Asia",
        "area": 143100,
        "population": 9537642,
        "Activities": []
    },
    {
        "id": "IRQ",
        "name": "Iraq",
        "image": "https://flagcdn.com/iq.svg",
        "continent": "{Asia}",
        "capital": "{Baghdad}",
        "subregion": "Western Asia",
        "area": 438317,
        "population": 40222503,
        "Activities": []
    },
    {
        "id": "CIV",
        "name": "Ivory Coast",
        "image": "https://flagcdn.com/ci.svg",
        "continent": "{Africa}",
        "capital": "{Yamoussoukro}",
        "subregion": "Western Africa",
        "area": 322463,
        "population": 26378275,
        "Activities": []
    },
    {
        "id": "CHE",
        "name": "Switzerland",
        "image": "https://flagcdn.com/ch.svg",
        "continent": "{Europe}",
        "capital": "{Bern}",
        "subregion": "Western Europe",
        "area": 41284,
        "population": 8654622,
        "Activities": []
    },
    {
        "id": "MUS",
        "name": "Mauritius",
        "image": "https://flagcdn.com/mu.svg",
        "continent": "{Africa}",
        "capital": "{\"Port Louis\"}",
        "subregion": "Eastern Africa",
        "area": 2040,
        "population": 1265740,
        "Activities": []
    },
    {
        "id": "CMR",
        "name": "Cameroon",
        "image": "https://flagcdn.com/cm.svg",
        "continent": "{Africa}",
        "capital": "{Yaoundé}",
        "subregion": "Middle Africa",
        "area": 475442,
        "population": 26545864,
        "Activities": []
    },
    {
        "id": "ZWE",
        "name": "Zimbabwe",
        "image": "https://flagcdn.com/zw.svg",
        "continent": "{Africa}",
        "capital": "{Harare}",
        "subregion": "Southern Africa",
        "area": 390757,
        "population": 14862927,
        "Activities": []
    },
    {
        "id": "EGY",
        "name": "Egypt",
        "image": "https://flagcdn.com/eg.svg",
        "continent": "{Africa}",
        "capital": "{Cairo}",
        "subregion": "Northern Africa",
        "area": 1002450,
        "population": 102334403,
        "Activities": []
    },
    {
        "id": "GRD",
        "name": "Grenada",
        "image": "https://flagcdn.com/gd.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"St. George's\"}",
        "subregion": "Caribbean",
        "area": 344,
        "population": 112519,
        "Activities": []
    },
    {
        "id": "IOT",
        "name": "British Indian Ocean Territory",
        "image": "https://flagcdn.com/io.svg",
        "continent": "{Asia}",
        "capital": "{\"Diego Garcia\"}",
        "subregion": "Eastern Africa",
        "area": 60,
        "population": 3000,
        "Activities": []
    },
    {
        "id": "ALA",
        "name": "Åland Islands",
        "image": "https://flagcdn.com/ax.svg",
        "continent": "{Europe}",
        "capital": "{Mariehamn}",
        "subregion": "Northern Europe",
        "area": 1580,
        "population": 29458,
        "Activities": []
    },
    {
        "id": "ROU",
        "name": "Romania",
        "image": "https://flagcdn.com/ro.svg",
        "continent": "{Europe}",
        "capital": "{Bucharest}",
        "subregion": "Southeast Europe",
        "area": 238391,
        "population": 19286123,
        "Activities": []
    },
    {
        "id": "NIC",
        "name": "Nicaragua",
        "image": "https://flagcdn.com/ni.svg",
        "continent": "{\"North America\"}",
        "capital": "{Managua}",
        "subregion": "Central America",
        "area": 130373,
        "population": 6624554,
        "Activities": []
    },
    {
        "id": "AGO",
        "name": "Angola",
        "image": "https://flagcdn.com/ao.svg",
        "continent": "{Africa}",
        "capital": "{Luanda}",
        "subregion": "Middle Africa",
        "area": 1246700,
        "population": 32866268,
        "Activities": []
    },
    {
        "id": "TTO",
        "name": "Trinidad and Tobago",
        "image": "https://flagcdn.com/tt.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"Port of Spain\"}",
        "subregion": "Caribbean",
        "area": 5130,
        "population": 1399491,
        "Activities": []
    },
    {
        "id": "JEY",
        "name": "Jersey",
        "image": "https://flagcdn.com/je.svg",
        "continent": "{Europe}",
        "capital": "{\"Saint Helier\"}",
        "subregion": "Northern Europe",
        "area": 116,
        "population": 100800,
        "Activities": []
    },
    {
        "id": "SYR",
        "name": "Syria",
        "image": "https://flagcdn.com/sy.svg",
        "continent": "{Asia}",
        "capital": "{Damascus}",
        "subregion": "Western Asia",
        "area": 185180,
        "population": 17500657,
        "Activities": []
    },
    {
        "id": "GGY",
        "name": "Guernsey",
        "image": "https://flagcdn.com/gg.svg",
        "continent": "{Europe}",
        "capital": "{\"St. Peter Port\"}",
        "subregion": "Northern Europe",
        "area": 78,
        "population": 62999,
        "Activities": []
    },
    {
        "id": "ASM",
        "name": "American Samoa",
        "image": "https://flagcdn.com/as.svg",
        "continent": "{Oceania}",
        "capital": "{\"Pago Pago\"}",
        "subregion": "Polynesia",
        "area": 199,
        "population": 55197,
        "Activities": []
    },
    {
        "id": "MAF",
        "name": "Saint Martin",
        "image": "https://flagcdn.com/mf.svg",
        "continent": "{\"North America\"}",
        "capital": "{Marigot}",
        "subregion": "Caribbean",
        "area": 53,
        "population": 38659,
        "Activities": []
    },
    {
        "id": "PRK",
        "name": "North Korea",
        "image": "https://flagcdn.com/kp.svg",
        "continent": "{Asia}",
        "capital": "{Pyongyang}",
        "subregion": "Eastern Asia",
        "area": 120538,
        "population": 25778815,
        "Activities": []
    },
    {
        "id": "KGZ",
        "name": "Kyrgyzstan",
        "image": "https://flagcdn.com/kg.svg",
        "continent": "{Asia}",
        "capital": "{Bishkek}",
        "subregion": "Central Asia",
        "area": 199951,
        "population": 6591600,
        "Activities": []
    },
    {
        "id": "KHM",
        "name": "Cambodia",
        "image": "https://flagcdn.com/kh.svg",
        "continent": "{Asia}",
        "capital": "{\"Phnom Penh\"}",
        "subregion": "South-Eastern Asia",
        "area": 181035,
        "population": 16718971,
        "Activities": []
    },
    {
        "id": "GUF",
        "name": "French Guiana",
        "image": "https://flagcdn.com/gf.svg",
        "continent": "{\"South America\"}",
        "capital": "{Cayenne}",
        "subregion": "South America",
        "area": 83534,
        "population": 254541,
        "Activities": []
    },
    {
        "id": "KWT",
        "name": "Kuwait",
        "image": "https://flagcdn.com/kw.svg",
        "continent": "{Asia}",
        "capital": "{\"Kuwait City\"}",
        "subregion": "Western Asia",
        "area": 17818,
        "population": 4270563,
        "Activities": []
    },
    {
        "id": "TCA",
        "name": "Turks and Caicos Islands",
        "image": "https://flagcdn.com/tc.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"Cockburn Town\"}",
        "subregion": "Caribbean",
        "area": 948,
        "population": 38718,
        "Activities": []
    },
    {
        "id": "UGA",
        "name": "Uganda",
        "image": "https://flagcdn.com/ug.svg",
        "continent": "{Africa}",
        "capital": "{Kampala}",
        "subregion": "Eastern Africa",
        "area": 241550,
        "population": 45741000,
        "Activities": []
    },
    {
        "id": "VNM",
        "name": "Vietnam",
        "image": "https://flagcdn.com/vn.svg",
        "continent": "{Asia}",
        "capital": "{Hanoi}",
        "subregion": "South-Eastern Asia",
        "area": 331212,
        "population": 97338583,
        "Activities": []
    },
    {
        "id": "CPV",
        "name": "Cape Verde",
        "image": "https://flagcdn.com/cv.svg",
        "continent": "{Africa}",
        "capital": "{Praia}",
        "subregion": "Western Africa",
        "area": 4033,
        "population": 555988,
        "Activities": []
    },
    {
        "id": "UNK",
        "name": "Kosovo",
        "image": "https://flagcdn.com/xk.svg",
        "continent": "{Europe}",
        "capital": "{Pristina}",
        "subregion": "Southeast Europe",
        "area": 10908,
        "population": 1775378,
        "Activities": []
    },
    {
        "id": "CAN",
        "name": "Canada",
        "image": "https://flagcdn.com/ca.svg",
        "continent": "{\"North America\"}",
        "capital": "{Ottawa}",
        "subregion": "North America",
        "area": 9984670,
        "population": 38005238,
        "Activities": []
    },
    {
        "id": "CXR",
        "name": "Christmas Island",
        "image": "https://flagcdn.com/cx.svg",
        "continent": "{Asia}",
        "capital": "{\"Flying Fish Cove\"}",
        "subregion": "Australia and New Zealand",
        "area": 135,
        "population": 2072,
        "Activities": []
    },
    {
        "id": "BHS",
        "name": "Bahamas",
        "image": "https://flagcdn.com/bs.svg",
        "continent": "{\"North America\"}",
        "capital": "{Nassau}",
        "subregion": "Caribbean",
        "area": 13943,
        "population": 393248,
        "Activities": []
    },
    {
        "id": "GHA",
        "name": "Ghana",
        "image": "https://flagcdn.com/gh.svg",
        "continent": "{Africa}",
        "capital": "{Accra}",
        "subregion": "Western Africa",
        "area": 238533,
        "population": 31072945,
        "Activities": []
    },
    {
        "id": "PSE",
        "name": "Palestine",
        "image": "https://flagcdn.com/ps.svg",
        "continent": "{Asia}",
        "capital": "{Ramallah}",
        "subregion": "Western Asia",
        "area": 6220,
        "population": 4803269,
        "Activities": []
    },
    {
        "id": "DZA",
        "name": "Algeria",
        "image": "https://flagcdn.com/dz.svg",
        "continent": "{Africa}",
        "capital": "{Algiers}",
        "subregion": "Northern Africa",
        "area": 2381741,
        "population": 44700000,
        "Activities": []
    },
    {
        "id": "SLV",
        "name": "El Salvador",
        "image": "https://flagcdn.com/sv.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"San Salvador\"}",
        "subregion": "Central America",
        "area": 21041,
        "population": 6486201,
        "Activities": []
    },
    {
        "id": "IND",
        "name": "India",
        "image": "https://flagcdn.com/in.svg",
        "continent": "{Asia}",
        "capital": "{\"New Delhi\"}",
        "subregion": "Southern Asia",
        "area": 3287590,
        "population": 1380004385,
        "Activities": []
    },
    {
        "id": "ISL",
        "name": "Iceland",
        "image": "https://flagcdn.com/is.svg",
        "continent": "{Europe}",
        "capital": "{Reykjavik}",
        "subregion": "Northern Europe",
        "area": 103000,
        "population": 366425,
        "Activities": []
    },
    {
        "id": "MRT",
        "name": "Mauritania",
        "image": "https://flagcdn.com/mr.svg",
        "continent": "{Africa}",
        "capital": "{Nouakchott}",
        "subregion": "Western Africa",
        "area": 1030700,
        "population": 4649660,
        "Activities": []
    },
    {
        "id": "CHL",
        "name": "Chile",
        "image": "https://flagcdn.com/cl.svg",
        "continent": "{\"South America\"}",
        "capital": "{Santiago}",
        "subregion": "South America",
        "area": 756102,
        "population": 19116209,
        "Activities": []
    },
    {
        "id": "MTQ",
        "name": "Martinique",
        "image": "https://flagcdn.com/mq.svg",
        "continent": "{\"North America\"}",
        "capital": "{Fort-de-France}",
        "subregion": "Caribbean",
        "area": 1128,
        "population": 378243,
        "Activities": []
    },
    {
        "id": "LUX",
        "name": "Luxembourg",
        "image": "https://flagcdn.com/lu.svg",
        "continent": "{Europe}",
        "capital": "{Luxembourg}",
        "subregion": "Western Europe",
        "area": 2586,
        "population": 632275,
        "Activities": []
    },
    {
        "id": "PHL",
        "name": "Philippines",
        "image": "https://flagcdn.com/ph.svg",
        "continent": "{Asia}",
        "capital": "{Manila}",
        "subregion": "South-Eastern Asia",
        "area": 342353,
        "population": 109581085,
        "Activities": []
    },
    {
        "id": "SXM",
        "name": "Sint Maarten",
        "image": "https://flagcdn.com/sx.svg",
        "continent": "{\"North America\"}",
        "capital": "{Philipsburg}",
        "subregion": "Caribbean",
        "area": 34,
        "population": 40812,
        "Activities": []
    },
    {
        "id": "CUW",
        "name": "Curaçao",
        "image": "https://flagcdn.com/cw.svg",
        "continent": "{\"North America\"}",
        "capital": "{Willemstad}",
        "subregion": "Caribbean",
        "area": 444,
        "population": 155014,
        "Activities": []
    },
    {
        "id": "ABW",
        "name": "Aruba",
        "image": "https://flagcdn.com/aw.svg",
        "continent": "{\"North America\"}",
        "capital": "{Oranjestad}",
        "subregion": "Caribbean",
        "area": 180,
        "population": 106766,
        "Activities": []
    },
    {
        "id": "MLT",
        "name": "Malta",
        "image": "https://flagcdn.com/mt.svg",
        "continent": "{Europe}",
        "capital": "{Valletta}",
        "subregion": "Southern Europe",
        "area": 316,
        "population": 525285,
        "Activities": []
    },
    {
        "id": "KIR",
        "name": "Kiribati",
        "image": "https://flagcdn.com/ki.svg",
        "continent": "{Oceania}",
        "capital": "{\"South Tarawa\"}",
        "subregion": "Micronesia",
        "area": 811,
        "population": 119446,
        "Activities": []
    },
    {
        "id": "BWA",
        "name": "Botswana",
        "image": "https://flagcdn.com/bw.svg",
        "continent": "{Africa}",
        "capital": "{Gaborone}",
        "subregion": "Southern Africa",
        "area": 582000,
        "population": 2351625,
        "Activities": []
    },
    {
        "id": "CAF",
        "name": "Central African Republic",
        "image": "https://flagcdn.com/cf.svg",
        "continent": "{Africa}",
        "capital": "{Bangui}",
        "subregion": "Middle Africa",
        "area": 622984,
        "population": 4829764,
        "Activities": []
    },
    {
        "id": "NZL",
        "name": "New Zealand",
        "image": "https://flagcdn.com/nz.svg",
        "continent": "{Oceania}",
        "capital": "{Wellington}",
        "subregion": "Australia and New Zealand",
        "area": 270467,
        "population": 5084300,
        "Activities": []
    },
    {
        "id": "CZE",
        "name": "Czechia",
        "image": "https://flagcdn.com/cz.svg",
        "continent": "{Europe}",
        "capital": "{Prague}",
        "subregion": "Central Europe",
        "area": 78865,
        "population": 10698896,
        "Activities": []
    },
    {
        "id": "GNQ",
        "name": "Equatorial Guinea",
        "image": "https://flagcdn.com/gq.svg",
        "continent": "{Africa}",
        "capital": "{Malabo}",
        "subregion": "Middle Africa",
        "area": 28051,
        "population": 1402985,
        "Activities": []
    },
    {
        "id": "SSD",
        "name": "South Sudan",
        "image": "https://flagcdn.com/ss.svg",
        "continent": "{Africa}",
        "capital": "{Juba}",
        "subregion": "Middle Africa",
        "area": 619745,
        "population": 11193729,
        "Activities": []
    },
    {
        "id": "ISR",
        "name": "Israel",
        "image": "https://flagcdn.com/il.svg",
        "continent": "{Asia}",
        "capital": "{Jerusalem}",
        "subregion": "Western Asia",
        "area": 20770,
        "population": 9216900,
        "Activities": []
    },
    {
        "id": "BRB",
        "name": "Barbados",
        "image": "https://flagcdn.com/bb.svg",
        "continent": "{\"North America\"}",
        "capital": "{Bridgetown}",
        "subregion": "Caribbean",
        "area": 430,
        "population": 287371,
        "Activities": []
    },
    {
        "id": "VAT",
        "name": "Vatican City",
        "image": "https://flagcdn.com/va.svg",
        "continent": "{Europe}",
        "capital": "{\"Vatican City\"}",
        "subregion": "Southern Europe",
        "area": 0,
        "population": 451,
        "Activities": []
    },
    {
        "id": "GRL",
        "name": "Greenland",
        "image": "https://flagcdn.com/gl.svg",
        "continent": "{\"North America\"}",
        "capital": "{Nuuk}",
        "subregion": "North America",
        "area": 2166086,
        "population": 56367,
        "Activities": []
    },
    {
        "id": "PRY",
        "name": "Paraguay",
        "image": "https://flagcdn.com/py.svg",
        "continent": "{\"South America\"}",
        "capital": "{Asunción}",
        "subregion": "South America",
        "area": 406752,
        "population": 7132530,
        "Activities": []
    },
    {
        "id": "MDA",
        "name": "Moldova",
        "image": "https://flagcdn.com/md.svg",
        "continent": "{Europe}",
        "capital": "{Chișinău}",
        "subregion": "Eastern Europe",
        "area": 33846,
        "population": 2617820,
        "Activities": []
    },
    {
        "id": "AFG",
        "name": "Afghanistan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "continent": "{Asia}",
        "capital": "{Kabul}",
        "subregion": "Southern Asia",
        "area": 652230,
        "population": 40218234,
        "Activities": []
    },
    {
        "id": "UKR",
        "name": "Ukraine",
        "image": "https://flagcdn.com/ua.svg",
        "continent": "{Europe}",
        "capital": "{Kyiv}",
        "subregion": "Eastern Europe",
        "area": 603500,
        "population": 44134693,
        "Activities": []
    },
    {
        "id": "TKL",
        "name": "Tokelau",
        "image": "https://flagcdn.com/tk.svg",
        "continent": "{Oceania}",
        "capital": "{Fakaofo}",
        "subregion": "Polynesia",
        "area": 12,
        "population": 1411,
        "Activities": []
    },
    {
        "id": "YEM",
        "name": "Yemen",
        "image": "https://flagcdn.com/ye.svg",
        "continent": "{Asia}",
        "capital": "{Sana'a}",
        "subregion": "Western Asia",
        "area": 527968,
        "population": 29825968,
        "Activities": []
    },
    {
        "id": "PRI",
        "name": "Puerto Rico",
        "image": "https://flagcdn.com/pr.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"San Juan\"}",
        "subregion": "Caribbean",
        "area": 8870,
        "population": 3194034,
        "Activities": []
    },
    {
        "id": "MHL",
        "name": "Marshall Islands",
        "image": "https://flagcdn.com/mh.svg",
        "continent": "{Oceania}",
        "capital": "{Majuro}",
        "subregion": "Micronesia",
        "area": 181,
        "population": 59194,
        "Activities": []
    },
    {
        "id": "TLS",
        "name": "Timor-Leste",
        "image": "https://flagcdn.com/tl.svg",
        "continent": "{Oceania}",
        "capital": "{Dili}",
        "subregion": "South-Eastern Asia",
        "area": 14874,
        "population": 1318442,
        "Activities": []
    },
    {
        "id": "IDN",
        "name": "Indonesia",
        "image": "https://flagcdn.com/id.svg",
        "continent": "{Asia}",
        "capital": "{Jakarta}",
        "subregion": "South-Eastern Asia",
        "area": 1904569,
        "population": 273523621,
        "Activities": []
    },
    {
        "id": "CRI",
        "name": "Costa Rica",
        "image": "https://flagcdn.com/cr.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"San José\"}",
        "subregion": "Central America",
        "area": 51100,
        "population": 5094114,
        "Activities": []
    },
    {
        "id": "MLI",
        "name": "Mali",
        "image": "https://flagcdn.com/ml.svg",
        "continent": "{Africa}",
        "capital": "{Bamako}",
        "subregion": "Western Africa",
        "area": 1240192,
        "population": 20250834,
        "Activities": []
    },
    {
        "id": "SHN",
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "image": "https://flagcdn.com/sh.svg",
        "continent": "{Africa}",
        "capital": "{Jamestown}",
        "subregion": "Western Africa",
        "area": 394,
        "population": 53192,
        "Activities": []
    },
    {
        "id": "AUS",
        "name": "Australia",
        "image": "https://flagcdn.com/au.svg",
        "continent": "{Oceania}",
        "capital": "{Canberra}",
        "subregion": "Australia and New Zealand",
        "area": 7692024,
        "population": 25687041,
        "Activities": []
    },
    {
        "id": "GLP",
        "name": "Guadeloupe",
        "image": "https://flagcdn.com/gp.svg",
        "continent": "{\"North America\"}",
        "capital": "{Basse-Terre}",
        "subregion": "Caribbean",
        "area": 1628,
        "population": 400132,
        "Activities": []
    },
    {
        "id": "TON",
        "name": "Tonga",
        "image": "https://flagcdn.com/to.svg",
        "continent": "{Oceania}",
        "capital": "{Nuku'alofa}",
        "subregion": "Polynesia",
        "area": 747,
        "population": 105697,
        "Activities": []
    },
    {
        "id": "THA",
        "name": "Thailand",
        "image": "https://flagcdn.com/th.svg",
        "continent": "{Asia}",
        "capital": "{Bangkok}",
        "subregion": "South-Eastern Asia",
        "area": 513120,
        "population": 69799978,
        "Activities": []
    },
    {
        "id": "FRO",
        "name": "Faroe Islands",
        "image": "https://flagcdn.com/fo.svg",
        "continent": "{Europe}",
        "capital": "{Tórshavn}",
        "subregion": "Northern Europe",
        "area": 1393,
        "population": 48865,
        "Activities": []
    },
    {
        "id": "NOR",
        "name": "Norway",
        "image": "https://flagcdn.com/no.svg",
        "continent": "{Europe}",
        "capital": "{Oslo}",
        "subregion": "Northern Europe",
        "area": 323802,
        "population": 5379475,
        "Activities": []
    },
    {
        "id": "MNE",
        "name": "Montenegro",
        "image": "https://flagcdn.com/me.svg",
        "continent": "{Europe}",
        "capital": "{Podgorica}",
        "subregion": "Southeast Europe",
        "area": 13812,
        "population": 621718,
        "Activities": []
    },
    {
        "id": "MCO",
        "name": "Monaco",
        "image": "https://flagcdn.com/mc.svg",
        "continent": "{Europe}",
        "capital": "{Monaco}",
        "subregion": "Western Europe",
        "area": 2,
        "population": 39244,
        "Activities": []
    },
    {
        "id": "SJM",
        "name": "Svalbard and Jan Mayen",
        "image": "https://flagcdn.com/sj.svg",
        "continent": "{Europe}",
        "capital": "{Longyearbyen}",
        "subregion": "Northern Europe",
        "area": -1,
        "population": 2562,
        "Activities": []
    },
    {
        "id": "JPN",
        "name": "Japan",
        "image": "https://flagcdn.com/jp.svg",
        "continent": "{Asia}",
        "capital": "{Tokyo}",
        "subregion": "Eastern Asia",
        "area": 377930,
        "population": 125836021,
        "Activities": []
    },
    {
        "id": "GUY",
        "name": "Guyana",
        "image": "https://flagcdn.com/gy.svg",
        "continent": "{\"South America\"}",
        "capital": "{Georgetown}",
        "subregion": "South America",
        "area": 214969,
        "population": 786559,
        "Activities": []
    },
    {
        "id": "AND",
        "name": "Andorra",
        "image": "https://flagcdn.com/ad.svg",
        "continent": "{Europe}",
        "capital": "{\"Andorra la Vella\"}",
        "subregion": "Southern Europe",
        "area": 468,
        "population": 77265,
        "Activities": []
    },
    {
        "id": "NFK",
        "name": "Norfolk Island",
        "image": "https://flagcdn.com/nf.svg",
        "continent": "{Oceania}",
        "capital": "{Kingston}",
        "subregion": "Australia and New Zealand",
        "area": 36,
        "population": 2302,
        "Activities": []
    },
    {
        "id": "SPM",
        "name": "Saint Pierre and Miquelon",
        "image": "https://flagcdn.com/pm.svg",
        "continent": "{\"North America\"}",
        "capital": "{Saint-Pierre}",
        "subregion": "North America",
        "area": 242,
        "population": 6069,
        "Activities": []
    },
    {
        "id": "NRU",
        "name": "Nauru",
        "image": "https://flagcdn.com/nr.svg",
        "continent": "{Oceania}",
        "capital": "{Yaren}",
        "subregion": "Micronesia",
        "area": 21,
        "population": 10834,
        "Activities": []
    },
    {
        "id": "MYT",
        "name": "Mayotte",
        "image": "https://flagcdn.com/yt.svg",
        "continent": "{Africa}",
        "capital": "{Mamoudzou}",
        "subregion": "Eastern Africa",
        "area": 374,
        "population": 226915,
        "Activities": []
    },
    {
        "id": "LAO",
        "name": "Laos",
        "image": "https://flagcdn.com/la.svg",
        "continent": "{Asia}",
        "capital": "{Vientiane}",
        "subregion": "South-Eastern Asia",
        "area": 236800,
        "population": 7275556,
        "Activities": []
    },
    {
        "id": "BDI",
        "name": "Burundi",
        "image": "https://flagcdn.com/bi.svg",
        "continent": "{Africa}",
        "capital": "{Gitega}",
        "subregion": "Eastern Africa",
        "area": 27834,
        "population": 11890781,
        "Activities": []
    },
    {
        "id": "DMA",
        "name": "Dominica",
        "image": "https://flagcdn.com/dm.svg",
        "continent": "{\"North America\"}",
        "capital": "{Roseau}",
        "subregion": "Caribbean",
        "area": 751,
        "population": 71991,
        "Activities": []
    },
    {
        "id": "ECU",
        "name": "Ecuador",
        "image": "https://flagcdn.com/ec.svg",
        "continent": "{\"South America\"}",
        "capital": "{Quito}",
        "subregion": "South America",
        "area": 276841,
        "population": 17643060,
        "Activities": []
    },
    {
        "id": "REU",
        "name": "Réunion",
        "image": "https://flagcdn.com/re.svg",
        "continent": "{Africa}",
        "capital": "{Saint-Denis}",
        "subregion": "Eastern Africa",
        "area": 2511,
        "population": 840974,
        "Activities": []
    },
    {
        "id": "TWN",
        "name": "Taiwan",
        "image": "https://flagcdn.com/tw.svg",
        "continent": "{Asia}",
        "capital": "{Taipei}",
        "subregion": "Eastern Asia",
        "area": 36193,
        "population": 23503349,
        "Activities": []
    },
    {
        "id": "LIE",
        "name": "Liechtenstein",
        "image": "https://flagcdn.com/li.svg",
        "continent": "{Europe}",
        "capital": "{Vaduz}",
        "subregion": "Western Europe",
        "area": 160,
        "population": 38137,
        "Activities": []
    },
    {
        "id": "DOM",
        "name": "Dominican Republic",
        "image": "https://flagcdn.com/do.svg",
        "continent": "{\"North America\"}",
        "capital": "{\"Santo Domingo\"}",
        "subregion": "Caribbean",
        "area": 48671,
        "population": 10847904,
        "Activities": []
    },
    {
        "id": "LKA",
        "name": "Sri Lanka",
        "image": "https://flagcdn.com/lk.svg",
        "continent": "{Asia}",
        "capital": "{\"Sri Jayawardenepura Kotte\"}",
        "subregion": "Southern Asia",
        "area": 65610,
        "population": 21919000,
        "Activities": []
    },
    {
        "id": "TUN",
        "name": "Tunisia",
        "image": "https://flagcdn.com/tn.svg",
        "continent": "{Africa}",
        "capital": "{Tunis}",
        "subregion": "Northern Africa",
        "area": 163610,
        "population": 11818618,
        "Activities": []
    },
    {
        "id": "SRB",
        "name": "Serbia",
        "image": "https://flagcdn.com/rs.svg",
        "continent": "{Europe}",
        "capital": "{Belgrade}",
        "subregion": "Southeast Europe",
        "area": 88361,
        "population": 6908224,
        "Activities": []
    },
]

//let value = '{Oceania}';

//"{\"North America\"}" ;

// const filterC = data2.filter(country => country.continent === value );
// console.log(filterC);

//console.log(data2.sort((a, b) => a.population - b.population).slice(0,5));
//console.log(data2.sort((a, b) => b.population - a.population).slice(0,5));