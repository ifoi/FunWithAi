
import getPrompt, getApiResponse from "./getPrompt"


const myform = document.getElementById("myForm");
const url = "https://api.openai.com/v1/engines/text-curie-001/completions"

// const getPrompt = require("./getPrompt");
// const getApiResponse = require("./getPrompt");

//require("dotevn").config();

// store prompts and array Data 



// function handleForm() {



myform.addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData(this);
    let prompt = getPrompt(formData.prompt)
    
    getApiResponse(prompt)

    
//     const data = {
//         prompt: "Write a poem about a dog wearing skis",
//         temperature: 0.5,
//         max_tokens: 64,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//        };
//    // data.prompt = formData.m    
   
//     fetch(url, {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
//             },
//             body: JSON.stringify(data),
//         }) //;
   
//   // )
//    .then( (response) => {
//        return response.json(); 
//     })
//    .then( (aiResponse) =>{
//        console.log(aiResponse)
//    } ) 
   
}) 

// add to List of Responses
