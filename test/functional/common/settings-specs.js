"use strict";

var setup = require("./setup-base")
    , env = require('../../helpers/env')
    , getAppPath = require('../../helpers/app').getAppPath;

var desired = {
  app: getAppPath('testapp')
};
if (env.SELENDROID) {
  desired.automationName = 'selendroid';
}

describe('settings', function () {
  var driver;
  setup(this, desired, {'no-reset': true}).then(function (d) { driver = d; });

  it('should return a settings object even if none specified', function (done) {
    driver
      .settings().should.eventually.exist()
      .nodeify(done);
  });

  it('should be able to store a setting', function (done) {
    driver
      .settings({'settlers of': 'Catan'})
      .settings().should.eventually.have.property('settlers of')
      .nodeify(done);
  });
});
