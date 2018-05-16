describe('raindrops', function() {

  describe('when given a number that has 3 as a factor', function() {

    it('returns "Pling"', function() {
      expect(raindrops(3)).toEqual('Pling');
    });
  })

  describe('when given a number that has 5 as a factor', function() {

    it('returns "Plang"', function() {
      expect(raindrops(5)).toEqual('Plang');
      expect(raindrops(10)).toEqual('Plang');
    });
  });

  describe('when given a number that has 7 as a factor', function() {

    it('returns "Plong"', function() {
      expect(raindrops(7)).toEqual('Plong');
      expect(raindrops(14)).toEqual('Plong');
    });
  });

  describe('when given number has 3 and 5 as a factor', function() {

    it('returns "PlingPlang', function() {
      expect(raindrops(15)).toEqual('PlingPlang');
    });
  });

  describe('when given number has 3 and 7 as a factor', function() {

    it('returns "PlingPlong"', function() {
      expect(raindrops(21)).toEqual('PlingPlong');
    });
  });

  describe("when given a number that doesn't have 3 as a factor", function() {

    it('returns the number', function() {
      expect(raindrops(1)).toEqual(1);
      expect(raindrops(2)).toEqual(2);
      expect(raindrops(4)).toEqual(4);
      expect(raindrops(8)).toEqual(8);
    });
  });
});