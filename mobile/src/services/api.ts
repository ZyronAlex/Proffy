import axios from "axios";

const api = axios.create({
  baseURL: "exp://192.168.0.8:19000", // colocar o endereço na sessão Connection do Expo e a porta do server
});

export default api;
