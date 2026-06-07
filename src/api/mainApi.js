import useUserStore from "@/stores/userStore";
import axios from "axios";

export const mainApi = axios.create({
	baseURL: "http://localhost:8899/api",
	headers: {
		'Content-Type': 'application/json',
	},
})

mainApi.interceptors.request.use( config => {
 const token = useUserStore.getState().token
 if(token) {
   config.headers.Authorization = `Bearer ${token}`
 }
 return config
})

export const apiRegister = async (body) => {
 return await mainApi.post('/auth/register', body)
}

export const createPost = (body) => mainApi.post('/post', body)

export const getAllPosts = () => mainApi.get('/post')

export const deletePost = id => mainApi.delete(`/post${id}`)

export const updatePost = (id, body) => mainApi.put(`/post/${id}`, body)

export const createLike = (id)=>mainApi.post(`/post/${id}/like`)

export const unLike = (id)=> mainApi.delete(`/post/${id}/like`)