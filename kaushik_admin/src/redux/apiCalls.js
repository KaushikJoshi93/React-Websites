import { publicRequest } from '../requestMethods';
import {login , logout} from './userSlice'

export const loginUser = async (dispatch , user) =>{
    try {
        const res = await publicRequest.post("/auth/login" , user);
        console.log(`response = ${res.data}`)
        dispatch(login(res.data));
    } catch (err) {
        console.log(err);
    }
}