import axios from 'axios';

export default axios.create({
  baseURL: `https://letstalk-be.herokuapp.com/`,
  headers: {
    "Content-Type": "application/json",
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwN2NjOWVjYWQxNTAwMDA0ZWNiYTMzIiwiZW1haWxfaWQiOiJzcmlzYWQ5NUBnbWFpbC5jb20iLCJpYXQiOjE2NTI2MzkyMjcsImV4cCI6MTY1Mjg5ODQyN30.O-1oW7igLdBuFbIeBc5jq1DBhDD_tVuTWvmetVVS78s'
  }
});