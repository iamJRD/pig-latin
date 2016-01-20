describe("translator", function(){

  it("check to see if the word starts with a vowel. if true, add 'ay' to the end", function(){
    expect(translator("apple")).to.equal("appleay");
  });

});
