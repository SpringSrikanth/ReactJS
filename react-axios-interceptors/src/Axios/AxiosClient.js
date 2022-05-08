import axios from "axios";

const AxiosClient = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{
        "Content-Type": "application/json"
    }
})

AxiosClient.interceptors.request.use(req=>{
 console.log(req);
 return req;
})

AxiosClient.interceptors.response.use(
    res=>{
        console.log(res);
        return res;
    },
    error=>{
        console.log(error)
        if (error.response.status === 404) {
            throw new Error(`${error.config.url} not found`);
          }
        throw error;
    }
)

export default AxiosClient;