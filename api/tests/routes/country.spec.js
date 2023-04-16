/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: "ARG",
  name: "Argentina",
  image: "https://flagcdn.com/ar.svg",
  continent: "{\"South America\"}",
  capital: "{\"Buenos Aires\"}",
  subregion: "South America",
  area: 2780400,
  population: 45376763,
};

const getByName = {
    id: "FRA",
    name: "France",
    image: "https://flagcdn.com/fr.svg",
    continent: "{Europe}",
    capital: "{Paris}",
    subregion: "Western Europe",
    area: 551695,
    population: 67391582,
}


describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(getByName)));
  describe('GET /countries/nam?=franc', () => {
    it('should get 200', () =>
      agent.get('/countries/name?=franc').expect(200)
    );
  });
});