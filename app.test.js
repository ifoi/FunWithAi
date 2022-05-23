


// Get text from form 

const { describe } = require("@jest/globals");
const { expect } = require("expect");


//send text to openAI 

//add prompt to top of list  of openAI response
describe("create List element from prompt", ()=> {
    it("should add prompt to array", ()=>{
        let prompt = "tell a story about an elephant saying hello " ;
        expect.todo(createList(prompt).prompt).toBe(prompt) ;
        expect(responseList[0].prompt).toBe(prompt) ;
    })
}) 


// create list, from make sure it is text 
describe("create list element from form data", ()=> {
    test.todo("Check the input")
}) ;


