// work as postman 
const url = "https://guessingame.herokuapp.com/api/score"

async function getScores(){
    // GET request by default
    const data =await fetch(url)
    const updated_data = await data.json()
    return updated_data
}

async function postScore(name,score){
    const data = await fetch(url,{
        method: "POST",
        headers: {
            'Accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({name,score})
    })

    const updated_data = await data.json()
    return updated_data
}