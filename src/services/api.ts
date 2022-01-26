import axios from 'axios';


export const api = axios.create({
    baseURL: "https://patrocinavarzea.vercel.app"
  })

  export const apiLocalHost = axios.create({
    baseURL: 'http://localhost:8080'
  })
