
import {getPrompt, getApiResponse, responseList } from "./getPrompt.js"


const myform = document.getElementById("myForm");
const url = "https://api.openai.com/v1/engines/text-curie-001/completions"

const promptElm = document.getElementById("prompt");
const list = document.createDocumentFragment();
const aiResponseElm = document.getElementById("aiResponse");

//const responesList = [ ] ; 

// const getPrompt = require("./getPrompt");
// const getApiResponse = require("./getPrompt");

//require("dotevn").config();

// store prompts and array Data 

console.log(myform) ;

myform.addEventListener("submit", handleForm ) ;

async function handleForm(e) {
    e.preventDefault();

    const formData = new FormData(this);
    let prompt = getPrompt(formData.prompt)
    
    console.log(prompt)
    
    let apiResponse = await getApiResponse(prompt)
    
    //add to Array of responses 
    responseList.unshift( createList(apiResponse) ) ; 
    
    aiResponseElm.appendChild(renderList() ) 

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


// add builds HTML List of Responses
export function renderList( list ) {
    const li = document.createElement('li');
    li.textContent = "this is a test response";
    list.appendChild(li);
    aiResponseElm.appendChild(list ) 
    return list
}