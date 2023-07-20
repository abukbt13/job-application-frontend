import axios from "core-js/internals/queue";
import {onMounted} from "vue";

export function authorize(){
    const authHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

  const   authUser = async () => {
        try {
           const res= await axios.get('http://127.0.0.1:8000/api/user-auth', authHeader);
            console.log(res)
        } catch (error) {
            // localStorage.removeItem('token');
            // localStorage.removeItem('id');
            // localStorage.removeItem('role');
            // Token is invalid or expired, logout the user
            // window.location.href = '/login';
        }
        onMounted(()=>{
            authUser();
        })
    };

  return{
      authUser
  }


}