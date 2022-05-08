import axios from "axios";

const AxiosClient = axios.create({
    baseURL:'https://letstalk-be.herokuapp.com/',
    headers:{
        "Content-Type": "application/json"
    }
})

AxiosClient.interceptors.request.use(req=>{
 console.log(req);
 req.headers.authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwN2NjOWVjYWQxNTAwMDA0ZWNiYTMzIiwiZW1haWxfaWQiOiJzcmlzYWQ5NUBnbWFpbC5jb20iLCJpYXQiOjE2NTE5NDk4MTgsImV4cCI6MTY1MjIwOTAxOH0.qorsdyMaDCGuBRFUt4Hyr5XDMoyh5yVo5nFzysCaiSk"
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