/**
 * @jest-environment jsdom
 */

// const { expect } = require("@jest/globals");
// const { describe } = require("jest-circus");

const { it } = require("@jest/globals");
//const { getPrompt } = require("./getPrompt");
 import getPrompt, {getApiResponse} from "./getPrompt" ;
//const {getApiResponse} = require("./getPrompt.js");

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

const domObject = document.createElement("p") ;

describe("getPrompt", () => {
    it("should return the text value of prompt from Dom object", () => {
        domObject.innerTEXT ="Hello" ;
        expect(getPrompt(domObject)).toBe("Hello") ;
    });
}) 

describe("getApiResponse", ()=>{
    it("should send the sumbited text, to the API", ()=>{
        let prompt = "tell a story about an elephant saying hello "
        console.log(getApiResponse(prompt));
        expect(getApiResponse(prompt)).toBe("this is a story") ;
    })
})

