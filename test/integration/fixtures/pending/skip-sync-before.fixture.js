'use strict';

describe('skip in before', function () {
  before(function () {
    this.skip();
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
