const regexName = new RegExp("^[^0-9]*$");

export function validation(inputs) {
  const errors = {}
    if(!regexName.test(inputs.name)) errors.name = 'No numbers characters are allowed';
    if(!inputs.name) errors.name = 'Activity name is required ';
    if(!inputs.type) errors.type = 'Please choose an activity type';
    if(!inputs.difficulty) errors.difficulty = 'Please choose a difficulty number';
    if(inputs.duration > '12:00') errors.duration = 'Duration cannot be more than 12 hours';
    if(inputs.duration < '00:10') errors.duration = 'Duration cannot be less than 10 minutes';
    if(!inputs.season) errors.season = 'Please select a season';

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

export const countriesOptions = [
	{
		"id" : "AFG",
		"name" : "Afghanistan"
	},
	{
		"id" : "ALA",
		"name" : "Åland Islands"
	},
	{
		"id" : "ALB",
		"name" : "Albania"
	},
	{
		"id" : "DZA",
		"name" : "Algeria"
	},
	{
		"id" : "ASM",
		"name" : "American Samoa"
	},
	{
		"id" : "AND",
		"name" : "Andorra"
	},
	{
		"id" : "AGO",
		"name" : "Angola"
	},
	{
		"id" : "AIA",
		"name" : "Anguilla"
	},
	{
		"id" : "ATA",
		"name" : "Antarctica"
	},
	{
		"id" : "ATG",
		"name" : "Antigua and Barbuda"
	},
	{
		"id" : "ARG",
		"name" : "Argentina"
	},
	{
		"id" : "ARM",
		"name" : "Armenia"
	},
	{
		"id" : "ABW",
		"name" : "Aruba"
	},
	{
		"id" : "AUS",
		"name" : "Australia"
	},
	{
		"id" : "AUT",
		"name" : "Austria"
	},
	{
		"id" : "AZE",
		"name" : "Azerbaijan"
	},
	{
		"id" : "BHS",
		"name" : "Bahamas"
	},
	{
		"id" : "BHR",
		"name" : "Bahrain"
	},
	{
		"id" : "BGD",
		"name" : "Bangladesh"
	},
	{
		"id" : "BRB",
		"name" : "Barbados"
	},
	{
		"id" : "BLR",
		"name" : "Belarus"
	},
	{
		"id" : "BEL",
		"name" : "Belgium"
	},
	{
		"id" : "BLZ",
		"name" : "Belize"
	},
	{
		"id" : "BEN",
		"name" : "Benin"
	},
	{
		"id" : "BMU",
		"name" : "Bermuda"
	},
	{
		"id" : "BTN",
		"name" : "Bhutan"
	},
	{
		"id" : "BOL",
		"name" : "Bolivia"
	},
	{
		"id" : "BIH",
		"name" : "Bosnia and Herzegovina"
	},
	{
		"id" : "BWA",
		"name" : "Botswana"
	},
	{
		"id" : "BVT",
		"name" : "Bouvet Island"
	},
	{
		"id" : "BRA",
		"name" : "Brazil"
	},
	{
		"id" : "IOT",
		"name" : "British Indian Ocean Territory"
	},
	{
		"id" : "VGB",
		"name" : "British Virgin Islands"
	},
	{
		"id" : "BRN",
		"name" : "Brunei"
	},
	{
		"id" : "BGR",
		"name" : "Bulgaria"
	},
	{
		"id" : "BFA",
		"name" : "Burkina Faso"
	},
	{
		"id" : "BDI",
		"name" : "Burundi"
	},
	{
		"id" : "KHM",
		"name" : "Cambodia"
	},
	{
		"id" : "CMR",
		"name" : "Cameroon"
	},
	{
		"id" : "CAN",
		"name" : "Canada"
	},
	{
		"id" : "CPV",
		"name" : "Cape Verde"
	},
	{
		"id" : "BES",
		"name" : "Caribbean Netherlands"
	},
	{
		"id" : "CYM",
		"name" : "Cayman Islands"
	},
	{
		"id" : "CAF",
		"name" : "Central African Republic"
	},
	{
		"id" : "TCD",
		"name" : "Chad"
	},
	{
		"id" : "CHL",
		"name" : "Chile"
	},
	{
		"id" : "CHN",
		"name" : "China"
	},
	{
		"id" : "CXR",
		"name" : "Christmas Island"
	},
	{
		"id" : "CCK",
		"name" : "Cocos (Keeling) Islands"
	},
	{
		"id" : "COL",
		"name" : "Colombia"
	},
	{
		"id" : "COM",
		"name" : "Comoros"
	},
	{
		"id" : "COK",
		"name" : "Cook Islands"
	},
	{
		"id" : "CRI",
		"name" : "Costa Rica"
	},
	{
		"id" : "HRV",
		"name" : "Croatia"
	},
	{
		"id" : "CUB",
		"name" : "Cuba"
	},
	{
		"id" : "CUW",
		"name" : "Curaçao"
	},
	{
		"id" : "CYP",
		"name" : "Cyprus"
	},
	{
		"id" : "CZE",
		"name" : "Czechia"
	},
	{
		"id" : "DNK",
		"name" : "Denmark"
	},
	{
		"id" : "DJI",
		"name" : "Djibouti"
	},
	{
		"id" : "DMA",
		"name" : "Dominica"
	},
	{
		"id" : "DOM",
		"name" : "Dominican Republic"
	},
	{
		"id" : "COD",
		"name" : "DR Congo"
	},
	{
		"id" : "ECU",
		"name" : "Ecuador"
	},
	{
		"id" : "EGY",
		"name" : "Egypt"
	},
	{
		"id" : "SLV",
		"name" : "El Salvador"
	},
	{
		"id" : "GNQ",
		"name" : "Equatorial Guinea"
	},
	{
		"id" : "ERI",
		"name" : "Eritrea"
	},
	{
		"id" : "EST",
		"name" : "Estonia"
	},
	{
		"id" : "SWZ",
		"name" : "Eswatini"
	},
	{
		"id" : "ETH",
		"name" : "Ethiopia"
	},
	{
		"id" : "FLK",
		"name" : "Falkland Islands"
	},
	{
		"id" : "FRO",
		"name" : "Faroe Islands"
	},
	{
		"id" : "FJI",
		"name" : "Fiji"
	},
	{
		"id" : "FIN",
		"name" : "Finland"
	},
	{
		"id" : "FRA",
		"name" : "France"
	},
	{
		"id" : "GUF",
		"name" : "French Guiana"
	},
	{
		"id" : "PYF",
		"name" : "French Polynesia"
	},
	{
		"id" : "ATF",
		"name" : "French Southern and Antarctic Lands"
	},
	{
		"id" : "GAB",
		"name" : "Gabon"
	},
	{
		"id" : "GMB",
		"name" : "Gambia"
	},
	{
		"id" : "GEO",
		"name" : "Georgia"
	},
	{
		"id" : "DEU",
		"name" : "Germany"
	},
	{
		"id" : "GHA",
		"name" : "Ghana"
	},
	{
		"id" : "GIB",
		"name" : "Gibraltar"
	},
	{
		"id" : "GRC",
		"name" : "Greece"
	},
	{
		"id" : "GRL",
		"name" : "Greenland"
	},
	{
		"id" : "GRD",
		"name" : "Grenada"
	},
	{
		"id" : "GLP",
		"name" : "Guadeloupe"
	},
	{
		"id" : "GUM",
		"name" : "Guam"
	},
	{
		"id" : "GTM",
		"name" : "Guatemala"
	},
	{
		"id" : "GGY",
		"name" : "Guernsey"
	},
	{
		"id" : "GIN",
		"name" : "Guinea"
	},
	{
		"id" : "GNB",
		"name" : "Guinea-Bissau"
	},
	{
		"id" : "GUY",
		"name" : "Guyana"
	},
	{
		"id" : "HTI",
		"name" : "Haiti"
	},
	{
		"id" : "HMD",
		"name" : "Heard Island and McDonald Islands"
	},
	{
		"id" : "HND",
		"name" : "Honduras"
	},
	{
		"id" : "HKG",
		"name" : "Hong Kong"
	},
	{
		"id" : "HUN",
		"name" : "Hungary"
	},
	{
		"id" : "ISL",
		"name" : "Iceland"
	},
	{
		"id" : "IND",
		"name" : "India"
	},
	{
		"id" : "IDN",
		"name" : "Indonesia"
	},
	{
		"id" : "IRN",
		"name" : "Iran"
	},
	{
		"id" : "IRQ",
		"name" : "Iraq"
	},
	{
		"id" : "IRL",
		"name" : "Ireland"
	},
	{
		"id" : "IMN",
		"name" : "Isle of Man"
	},
	{
		"id" : "ISR",
		"name" : "Israel"
	},
	{
		"id" : "ITA",
		"name" : "Italy"
	},
	{
		"id" : "CIV",
		"name" : "Ivory Coast"
	},
	{
		"id" : "JAM",
		"name" : "Jamaica"
	},
	{
		"id" : "JPN",
		"name" : "Japan"
	},
	{
		"id" : "JEY",
		"name" : "Jersey"
	},
	{
		"id" : "JOR",
		"name" : "Jordan"
	},
	{
		"id" : "KAZ",
		"name" : "Kazakhstan"
	},
	{
		"id" : "KEN",
		"name" : "Kenya"
	},
	{
		"id" : "KIR",
		"name" : "Kiribati"
	},
	{
		"id" : "UNK",
		"name" : "Kosovo"
	},
	{
		"id" : "KWT",
		"name" : "Kuwait"
	},
	{
		"id" : "KGZ",
		"name" : "Kyrgyzstan"
	},
	{
		"id" : "LAO",
		"name" : "Laos"
	},
	{
		"id" : "LVA",
		"name" : "Latvia"
	},
	{
		"id" : "LBN",
		"name" : "Lebanon"
	},
	{
		"id" : "LSO",
		"name" : "Lesotho"
	},
	{
		"id" : "LBR",
		"name" : "Liberia"
	},
	{
		"id" : "LBY",
		"name" : "Libya"
	},
	{
		"id" : "LIE",
		"name" : "Liechtenstein"
	},
	{
		"id" : "LTU",
		"name" : "Lithuania"
	},
	{
		"id" : "LUX",
		"name" : "Luxembourg"
	},
	{
		"id" : "MAC",
		"name" : "Macau"
	},
	{
		"id" : "MDG",
		"name" : "Madagascar"
	},
	{
		"id" : "MWI",
		"name" : "Malawi"
	},
	{
		"id" : "MYS",
		"name" : "Malaysia"
	},
	{
		"id" : "MDV",
		"name" : "Maldives"
	},
	{
		"id" : "MLI",
		"name" : "Mali"
	},
	{
		"id" : "MLT",
		"name" : "Malta"
	},
	{
		"id" : "MHL",
		"name" : "Marshall Islands"
	},
	{
		"id" : "MTQ",
		"name" : "Martinique"
	},
	{
		"id" : "MRT",
		"name" : "Mauritania"
	},
	{
		"id" : "MUS",
		"name" : "Mauritius"
	},
	{
		"id" : "MYT",
		"name" : "Mayotte"
	},
	{
		"id" : "MEX",
		"name" : "Mexico"
	},
	{
		"id" : "FSM",
		"name" : "Micronesia"
	},
	{
		"id" : "MDA",
		"name" : "Moldova"
	},
	{
		"id" : "MCO",
		"name" : "Monaco"
	},
	{
		"id" : "MNG",
		"name" : "Mongolia"
	},
	{
		"id" : "MNE",
		"name" : "Montenegro"
	},
	{
		"id" : "MSR",
		"name" : "Montserrat"
	},
	{
		"id" : "MAR",
		"name" : "Morocco"
	},
	{
		"id" : "MOZ",
		"name" : "Mozambique"
	},
	{
		"id" : "MMR",
		"name" : "Myanmar"
	},
	{
		"id" : "NAM",
		"name" : "Namibia"
	},
	{
		"id" : "NRU",
		"name" : "Nauru"
	},
	{
		"id" : "NPL",
		"name" : "Nepal"
	},
	{
		"id" : "NLD",
		"name" : "Netherlands"
	},
	{
		"id" : "NCL",
		"name" : "New Caledonia"
	},
	{
		"id" : "NZL",
		"name" : "New Zealand"
	},
	{
		"id" : "NIC",
		"name" : "Nicaragua"
	},
	{
		"id" : "NER",
		"name" : "Niger"
	},
	{
		"id" : "NGA",
		"name" : "Nigeria"
	},
	{
		"id" : "NIU",
		"name" : "Niue"
	},
	{
		"id" : "NFK",
		"name" : "Norfolk Island"
	},
	{
		"id" : "PRK",
		"name" : "North Korea"
	},
	{
		"id" : "MKD",
		"name" : "North Macedonia"
	},
	{
		"id" : "MNP",
		"name" : "Northern Mariana Islands"
	},
	{
		"id" : "NOR",
		"name" : "Norway"
	},
	{
		"id" : "OMN",
		"name" : "Oman"
	},
	{
		"id" : "PAK",
		"name" : "Pakistan"
	},
	{
		"id" : "PLW",
		"name" : "Palau"
	},
	{
		"id" : "PSE",
		"name" : "Palestine"
	},
	{
		"id" : "PAN",
		"name" : "Panama"
	},
	{
		"id" : "PNG",
		"name" : "Papua New Guinea"
	},
	{
		"id" : "PRY",
		"name" : "Paraguay"
	},
	{
		"id" : "PER",
		"name" : "Peru"
	},
	{
		"id" : "PHL",
		"name" : "Philippines"
	},
	{
		"id" : "PCN",
		"name" : "Pitcairn Islands"
	},
	{
		"id" : "POL",
		"name" : "Poland"
	},
	{
		"id" : "PRT",
		"name" : "Portugal"
	},
	{
		"id" : "PRI",
		"name" : "Puerto Rico"
	},
	{
		"id" : "QAT",
		"name" : "Qatar"
	},
	{
		"id" : "COG",
		"name" : "Republic of the Congo"
	},
	{
		"id" : "REU",
		"name" : "Réunion"
	},
	{
		"id" : "ROU",
		"name" : "Romania"
	},
	{
		"id" : "RUS",
		"name" : "Russia"
	},
	{
		"id" : "RWA",
		"name" : "Rwanda"
	},
	{
		"id" : "BLM",
		"name" : "Saint Barthélemy"
	},
	{
		"id" : "SHN",
		"name" : "Saint Helena, Ascension and Tristan da Cunha"
	},
	{
		"id" : "KNA",
		"name" : "Saint Kitts and Nevis"
	},
	{
		"id" : "LCA",
		"name" : "Saint Lucia"
	},
	{
		"id" : "MAF",
		"name" : "Saint Martin"
	},
	{
		"id" : "SPM",
		"name" : "Saint Pierre and Miquelon"
	},
	{
		"id" : "VCT",
		"name" : "Saint Vincent and the Grenadines"
	},
	{
		"id" : "WSM",
		"name" : "Samoa"
	},
	{
		"id" : "SMR",
		"name" : "San Marino"
	},
	{
		"id" : "STP",
		"name" : "São Tomé and Príncipe"
	},
	{
		"id" : "SAU",
		"name" : "Saudi Arabia"
	},
	{
		"id" : "SEN",
		"name" : "Senegal"
	},
	{
		"id" : "SRB",
		"name" : "Serbia"
	},
	{
		"id" : "SYC",
		"name" : "Seychelles"
	},
	{
		"id" : "SLE",
		"name" : "Sierra Leone"
	},
	{
		"id" : "SGP",
		"name" : "Singapore"
	},
	{
		"id" : "SXM",
		"name" : "Sint Maarten"
	},
	{
		"id" : "SVK",
		"name" : "Slovakia"
	},
	{
		"id" : "SVN",
		"name" : "Slovenia"
	},
	{
		"id" : "SLB",
		"name" : "Solomon Islands"
	},
	{
		"id" : "SOM",
		"name" : "Somalia"
	},
	{
		"id" : "ZAF",
		"name" : "South Africa"
	},
	{
		"id" : "SGS",
		"name" : "South Georgia"
	},
	{
		"id" : "KOR",
		"name" : "South Korea"
	},
	{
		"id" : "SSD",
		"name" : "South Sudan"
	},
	{
		"id" : "ESP",
		"name" : "Spain"
	},
	{
		"id" : "LKA",
		"name" : "Sri Lanka"
	},
	{
		"id" : "SDN",
		"name" : "Sudan"
	},
	{
		"id" : "SUR",
		"name" : "Suriname"
	},
	{
		"id" : "SJM",
		"name" : "Svalbard and Jan Mayen"
	},
	{
		"id" : "SWE",
		"name" : "Sweden"
	},
	{
		"id" : "CHE",
		"name" : "Switzerland"
	},
	{
		"id" : "SYR",
		"name" : "Syria"
	},
	{
		"id" : "TWN",
		"name" : "Taiwan"
	},
	{
		"id" : "TJK",
		"name" : "Tajikistan"
	},
	{
		"id" : "TZA",
		"name" : "Tanzania"
	},
	{
		"id" : "THA",
		"name" : "Thailand"
	},
	{
		"id" : "TLS",
		"name" : "Timor-Leste"
	},
	{
		"id" : "TGO",
		"name" : "Togo"
	},
	{
		"id" : "TKL",
		"name" : "Tokelau"
	},
	{
		"id" : "TON",
		"name" : "Tonga"
	},
	{
		"id" : "TTO",
		"name" : "Trinidad and Tobago"
	},
	{
		"id" : "TUN",
		"name" : "Tunisia"
	},
	{
		"id" : "TUR",
		"name" : "Turkey"
	},
	{
		"id" : "TKM",
		"name" : "Turkmenistan"
	},
	{
		"id" : "TCA",
		"name" : "Turks and Caicos Islands"
	},
	{
		"id" : "TUV",
		"name" : "Tuvalu"
	},
	{
		"id" : "UGA",
		"name" : "Uganda"
	},
	{
		"id" : "UKR",
		"name" : "Ukraine"
	},
	{
		"id" : "ARE",
		"name" : "United Arab Emirates"
	},
	{
		"id" : "GBR",
		"name" : "United Kingdom"
	},
	{
		"id" : "USA",
		"name" : "United States"
	},
	{
		"id" : "UMI",
		"name" : "United States Minor Outlying Islands"
	},
	{
		"id" : "VIR",
		"name" : "United States Virgin Islands"
	},
	{
		"id" : "URY",
		"name" : "Uruguay"
	},
	{
		"id" : "UZB",
		"name" : "Uzbekistan"
	},
	{
		"id" : "VUT",
		"name" : "Vanuatu"
	},
	{
		"id" : "VAT",
		"name" : "Vatican City"
	},
	{
		"id" : "VEN",
		"name" : "Venezuela"
	},
	{
		"id" : "VNM",
		"name" : "Vietnam"
	},
	{
		"id" : "WLF",
		"name" : "Wallis and Futuna"
	},
	{
		"id" : "ESH",
		"name" : "Western Sahara"
	},
	{
		"id" : "YEM",
		"name" : "Yemen"
	},
	{
		"id" : "ZMB",
		"name" : "Zambia"
	},
	{
		"id" : "ZWE",
		"name" : "Zimbabwe"
	}
]




