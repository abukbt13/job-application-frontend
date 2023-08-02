import {useRouter} from "vue-router";
const router = useRouter()

export function restrictAccess(){


     const redirect = async  (progress,required) => {
        if(progress < required){
            alert('fgh')
          await   router.push('/applicant')
        }
     }



    return{
        redirect
    }
}