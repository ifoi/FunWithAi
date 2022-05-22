

function getPrompt( domObject) {
    prompt = domObject.innerTEXT ;

    return prompt ;
}

module.exports = getPrompt ;

export function getApiResponse( prompt) {
     //  apiResponse = "this is a story" 
     const data = {
        prompt: "Write a poem about a dog wearing skis",
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
       };
   // data.prompt = formData.m    
   
    fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
            },
            body: JSON.stringify(data),
        }) //;
   
  // )
   .then( (response) => {
       return response.json(); 
    })
   .then( (aiResponse) =>{
       console.log(aiResponse)
   } ) 

return apiResponse

}