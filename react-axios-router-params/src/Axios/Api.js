import axios from 'axios';

export default axios.create({
  baseURL: `https://letstalk-be.herokuapp.com/`,
  headers: {
    "Content-Type": "application/json",
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwN2NjOWVjYWQxNTAwMDA0ZWNiYTMzIiwiZW1haWxfaWQiOiJzcmlzYWQ5NUBnbWFpbC5jb20iLCJpYXQiOjE2NTA3Mzg1NzgsImV4cCI6MTY1MDk5Nzc3OH0.ZZ5z7mJLlXGKR7EKnn5g6hXLczoMNWKS4Tgb9aOvJvM'
  }
});