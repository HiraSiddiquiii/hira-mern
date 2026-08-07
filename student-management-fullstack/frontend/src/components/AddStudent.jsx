import {useState} from "react";
import API from "../api";


function AddStudent(){

const [student,setStudent]=useState({

name:"",
email:"",
course:"",
marks:""

});


const submit=async(e)=>{

e.preventDefault();


await API.post("/students",student);


alert("Student Added");

}


return(

<form onSubmit={submit}>


<input 
placeholder="Name"
onChange={(e)=>setStudent({...student,name:e.target.value})}
/>


<input 
placeholder="Email"
onChange={(e)=>setStudent({...student,email:e.target.value})}
/>


<input 
placeholder="Course"
onChange={(e)=>setStudent({...student,course:e.target.value})}
/>


<input 
placeholder="Marks"
onChange={(e)=>setStudent({...student,marks:e.target.value})}
/>


<button>Add</button>


</form>

)

}


export default AddStudent;