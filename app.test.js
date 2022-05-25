/**
 * @jest-environment jsdom
 */

import 'regenerator-runtime/runtime'
import fetch from 'isomorphic-fetch'

const { describe } = require("@jest/globals");
const { expect } = require("expect");

import {createList, renderList} from "./app"

// Get text from form 
// 
beforeEach(() =>{
    let prompt = "tell a story about an elephant saying hello " ;
} )
//send text to openAI 

afterEach(()=> {
    //reset array
    responseList.length = 0 ;
})

//add prompt to top of list  of openAI response
describe("create List element from prompt", ()=> {
    it("the response text should start with the initial input", ()=>{
      //  let prompt = "tell a story about an elephant saying hello " ;
      const data = createList(prompt) ;  
      
      expect(data.prompt).toMatch(new RegExp(`^${prompt}?`));
       // expect(responseList[0].prompt).toBe(prompt) ;
    })
}) 


// create list, from make sure it is text 
describe("create list element from form data array", ()=> {
    test.todo("Check the input") ;
    it("should add ai response to first element in array")
    //let prompt = "tell a story about an elephant saying hello " ;

    if(responseList.length >0) {
        expect(responseList[0].prompt).toBe(prompt) 
    }

}) ;


