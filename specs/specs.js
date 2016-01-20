describe("translator", function(){

  it("check to see if the word starts with a vowel. if true, add 'ay' to the end", function(){
    expect(translator("apple")).to.equal("appleay");
  });

  it("check to see if the word starts with a 'qu'. if true, move to end and add 'ay'", function(){
    expect(translator("quilt")).to.equal("iltquay");
  });

  it("check to see if the word starts with a 'squ'. if true, move to end and add 'ay'", function(){
    expect(translator("squeal")).to.equal("ealsquay");
  });
});
