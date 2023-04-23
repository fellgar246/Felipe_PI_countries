/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
    name: "Visit museum", 
    type: "Cultural",
    difficulty: 1, 
    duration: "01:10", 
    season: "Summer",
    country: ["FRA", "KEN", "MEX"]
};

const activity2 = {
    name: "Visit local places", 
    type: "Cultural",
    difficulty: 1, 
    duration: "00:30", 
    season: "Winter",
    country: ["BRA", "MEX"]
};


describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: true })
    .then(() => Activity.create(activity)));
  describe('GET /activities', () => {
    it('should get 200', () =>
      agent.get('/activities').expect(200)
    );
  });
  describe('POST /activities', () => {
    it('should get 201', () =>
      agent.post('/activities').send(activity2).expect(201)
    );
  });
});
