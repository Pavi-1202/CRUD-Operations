import { useEffect, useState } from "react";

const EditUser=(props)=>{
    const [user,setUser]=useState(props.currentUser)
    useEffect(()=>{
        setUser(props.currentUser)
    },[props])
    const handleChange=(event)=>{
       
        const {name,value}=event.target;
        setUser({...user,[name]:value})
     }
     return(
        <form className="mt-5" onSubmit={event=>{
            event.preventDefault();
            
            if(!user.name||!user.username) return;
            props.updateUser(user.id,user);
           
           }
            }>
            <label>Name</label>
            <input type='text' onChange={handleChange} name="name" className="form-control" value={user.name}/>
            <label>Username</label>
            <input type='text'  onChange={handleChange} name="username" className="form-control" value={user.username}/><br/>
            <button className="btn btn-outline-primary">Update user</button>
            <button onClick={()=>{
                props.setEditing(false)
            }}className="btn btn-outline-primary">Cancel</button>
        </form>
     )

}
export default EditUser;