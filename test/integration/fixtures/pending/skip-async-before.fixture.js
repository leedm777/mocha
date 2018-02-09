'use strict';

describe('skip in before', function () {
  before(function (done) {
    var self = this;
    setTimeout(function () {
      self.skip();
    }, 50);
  });

  beforeEach(function () {
    throw new Error('never thrown');
  });

  afterEach(function () {
    throw new Error('never thrown');
  });

  it('should never run this test', function () {
    throw new Error('never thrown');
  });

  it('should never run this test', function () {
    throw new Error('never thrown');
  });

  describe('in child suites', function () {
    before(function () {
      throw new Error('never thrown');
    });

    after(function () {
      throw new Error('never thrown');
    });

    beforeEach(function () {
      throw new Error('never thrown');
    });

    afterEach(function () {
      throw new Error('never thrown');
    });

    it('should never run this test', function () {
      throw new Error('never thrown');
    });
  });
});
