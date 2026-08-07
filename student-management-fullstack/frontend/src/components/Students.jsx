import {useEffect,useState} from "react";
import API from "../api";


function Students(){

const [students,setStudents]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");


useEffect(()=>{

loadStudents();

},[]);



const loadStudents=async()=>{

try{

const res=await API.get("/students");

setStudents(res.data);

}
catch(err){

setError("Failed to load students");

}

finally{

setLoading(false);

}

}



if(loading)
return <h2>Loading...</h2>


return(

<div>

<h1>Students</h1>

{
error && <p>{error}</p>
}


{
students.map(student=>(

<div key={student._id}>

<h3>{student.name}</h3>

<p>{student.email}</p>

</div>

))
}


</div>

)

}


export default Students;