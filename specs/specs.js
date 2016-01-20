describe("translator", function(){

  it("remove puncuation from string and change to lowercase", function(){
    expect(translator("Hello!")).to.equal("hello");
  });
  it("the word starts with a vowel, add 'ay' to the end", function() {
    expect(newString("apple")).to.equal.("appleay");
  });
});
