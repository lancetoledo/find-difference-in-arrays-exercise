const expect = chai.expect;

describe("Diff", () => {
  it("Should return an array of values that exist only in the first array.", () => {
    expect(diff([1, 2, 3, 4], [4])?.reduce((a, c) => (a += c), 0)).to.equal(
      6,
      "Check your function!"
    );
  });
});
