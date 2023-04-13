import axios from "axios"

const TOKEN = "certa3qad3i7i49830p0certa3qad3i7i49830pg"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1" ,
    
    params: {
        token: TOKEN
    }

})

