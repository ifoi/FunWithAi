
import {getPrompt, getApiResponse, responesList } from "./getPrompt.js"


const myform = document.getElementById("myForm");
const url = "https://api.openai.com/v1/engines/text-curie-001/completions"

const promptElm = document.getElementById("prompt");
const list = document.createDocumentFragment();


const responesList = [ ] ; 

// const getPrompt = require("./getPrompt");
// const getApiResponse = require("./getPrompt");

//require("dotevn").config();

// store prompts and array Data 


myform.addEventListener("submit", handleForm ) ;

function handleForm(e) {
    e.preventDefault();

    const formData = new FormData(this);
    let prompt = getPrompt(formData.prompt)
    
    console.log(prompt)
    
    let apiResponse = getApiResponse(prompt)
    

    responesList.unshift(createList(apiResponse) ) ; 
    
    renderList() 

    promptElm.textContent = "" ;
    
 
    /* createList( apiResponse) {
        responseList.unshift() */
        
    } 

    function createList(apiResponse) {
        const responseData = {
            prompt: "",
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
           };
       
           responseData.prompt = apiResponse

           return (responseData);

            
    }


// add to List of Responses
function renderList( list ) {
    
}