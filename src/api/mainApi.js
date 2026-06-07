import axios from "axios";

export const mainApi = axios.create({
	baseURL: "http://localhost:8899/api",
	headers: {
		'Content-Type': 'application/json',
	},
})


// export const apiRegister = async (body) => {
//   return await mainApi.post("/auth/register", body);
// };
// export const apiLogin = async (body) => {
//   return await mainApi.post("/auth/login", body);
// };
