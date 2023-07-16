import axios from "axios"
import {headers} from '@/composables/headers'
import {ref} from 'vue'
import {useRoute} from "vue-router"
export function applicant(){
    // const header = {
    //     'Authorization': `Bearer ${token}`}
            //professional Qualification
    const level =ref('')
     institution=ref('')
      course=ref('')
    const award=ref('')
    const startDate=ref('')
    const endDate=ref('')
    const user_id=11
    const certNo=ref('')

    const formData=new FormData()
    formData.append('level',level.value)
    formData.append('institution',institution.value)
    formData.append('course',course.value)
    formData.append('award',course.award)
    formData.append('startDate',course.startDate)
    formData.append('endDate',course.endDate)
    formData.append('certNo',course.endDate)

    const addProfoessionalQualification=async()=>{
        const res=await axios.post('http://127.0.0.1:8000/api/addProfessional',{headers})
        if(res.status==200){

        }
        dopost('addProfressional',data)
    }
            //relevant courses
    
    const relevantCourses=async()=>{
        const res=await axios.post('http://127.0.0.1:8000/api/addOtherCourse')
        if(res.status==200){

        }
    }
            //employment experience
    const position=ref('')
    const organisation=ref('')
    const workNature=ref('')
    
    formData.append('position', position.value)
    formData.append('organisation', organisation.value)
    formData.append('workNature', workNature.value)
    formData.append('startDate',course.startDate)
    formData.append('endDate',course.endDate)

    const employmentExperience=async()=>{
        const res= await axios.post('http://127.0.0.1:8000/api/addEmplomentExperience')
        if(res.status=== 200){

        }
    }
            //referees
    const fullName=ref('')
    const occupation=ref('')
    const phone=ref('')
    const email=('')
    
    const addReferees=async()=>{
        const res=await axios.post('http://127.0.0.1:8000/api/')
        if(res.status==200){

        }
    }
    return
    {   level,institution,course,award,
        startDate,endDate,user_id,certNo,position,
        organisation,workNature,fullName,occupation,
        phone,email,
        relevantCourses,addProfoessionalQualification,
        employmentExperience,addReferees
    }
}