'use strict'
var expect = require('chai').expect;
var server = require('./index');
var request = require('supertest');

it('Correctly returns pi', (done) => {
  request(server.server)
    .get("/math/pi")
    .end((err, res) => {
      expect(res.status).to.equal(200)
      expect(res.text).to.contain('3.141592653589793')
      done();
    })
})
