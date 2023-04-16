const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Activity.create({ name: 'Visit Museum' });
      });
    });
    describe('season', () => {
        it('should throw an error if season is null', (done) => {
          Activity.create({})
            .then(() => done(new Error('It requires a valid season')))
            .catch(() => done());
        });
        it('should throw an error if season is no a valid option', (done) => {
            Activity.create({ season: 'Cloudy' })
              .then(() => done(new Error('It requires a valid season')))
              .catch(() => done());
          });
        it('should work when its a valid season', () => {
          Activity.create({ season: 'Summer' });
        });
      });
  });
});