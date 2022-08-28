import { useState } from "react";

const AddUser=(props)=>{
    const initialState={id:null,name:'',username:''}

    const [user,setUser]=useState(initialState);

    const handleChange=(event)=>{
       
       const {name,value}=event.target;
       setUser({...user,[name]:value})
    }
    
return(
  
    <form className="mt-5" onSubmit={event=>{
        event.preventDefault();
        

        if(!user.name||!user.username) return;
        props.addUser(user);
        setUser(initialState);
       }
        }>
        <label>Name</label>
        <input type='text' onChange={handleChange} name="name" className="form-control" value={user.name}/>
        <label>Username</label>
        <input type='text'  onChange={handleChange} name="username" className="form-control" value={user.username}/><br/>
        <button className="btn btn-primary">Add new user</button>
    </form>
)
}
export default AddUser;