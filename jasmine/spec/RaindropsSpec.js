describe('raindrops', function() {

  describe('when given a number that has 3 as a factor', function() {

    it('returns "Pling"', function() {
      expect(raindrops(3)).toEqual('Pling');
    });
  })

  describe("when given a number that doesn't have 3 as a factor", function() {

    it('returns the number', function() {
      expect(raindrops(1)).toEqual(1);
    });
  });
});