
 export const responseList = [ ] ; 

 function getPrompt( domObject) {
    prompt = domObject.innerTEXT ;

    return prompt ;
}

module.exports = {getPrompt: getPrompt, 
                   getApiResponse: getApiResponse,
                  } ;

async function getApiResponse( prompt) {
    
    let apiResponse = "" ;
    const data = {
        prompt: "Write a poem about a dog wearing skis",
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
       };
    data.prompt = prompt ;
   
    fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
            },
            body: JSON.stringify(data),
        }) //;
   
    .then( (response) => {
       return response.json(); 
    })
    .then( (apiResponse) =>{
       console.log(apiResponse)
       data.prompt = apiResponse.results.prompt ;
       responseList.unshift(data) ;
    })
    .catch( (error => {
         throw error;
        }))  
   
   
return data.prompt //apiResponse

}


