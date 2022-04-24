import axios from 'axios';

export default axios.create({
  baseURL: `https://nodejscrudbysrikanth.herokuapp.com/`,
  headers: {
    "Content-Type": "application/json",
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwN2NjOWVjYWQxNTAwMDA0ZWNiYTMzIiwiZW1haWxfaWQiOiJzcmlzYWQ5NUBnbWFpbC5jb20iLCJpYXQiOjE2NTA4MjY3MzQsImV4cCI6MTY1MDkxMzEzNH0.0zurSzWMPQ_OA8z1h-7xeC9D2Ur1Fls7WKxm2Mvw3Hg'
  }
});