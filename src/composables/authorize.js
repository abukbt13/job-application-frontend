import axios from "core-js/internals/queue";

const authHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
export const authUser = async () => {

        try {
            await axios.get('http://127.0.0.1:8000/api/user', authHeader);
            console.log('okay');
        } catch (error) {
            // localStorage.removeItem('token');
            // localStorage.removeItem('id');
            // localStorage.removeItem('role');
            // Token is invalid or expired, logout the user
            window.location.href = '/login';
        }
    };

