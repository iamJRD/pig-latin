describe("removePunc", function(){
  it("remove puncuation from string and change to lowercase", function(){
    expect(removePunc("Hello!")).to.equal("hello");
  });
});

describe("vowelAy", function(){
  it("the word starts with a vowel, add 'ay' to the end", function(){
    expect(vowelAy("apple")).to.equal("appleay");
  });
});

describe("conso",function(){
  it("word starts with a consonent, move the first consecutive consonent to the end and add 'ay'", function(){
    expect(conso("pool")).to.equal("oolpay");
  });
});
