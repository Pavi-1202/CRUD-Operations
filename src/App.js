import { useState } from "react";
import AddUser from "./AddUser";
import TableUser from "./Table";
import EditUser from "./EditUser";



function App() {
  
  const UsersData=[
    {id:1,name:'TonyStark',username:'Ironman'},
    {id:2,name:'Peter',username:'Spiderman'},
    {id:3,name:'Steve',username:'CapainAmerica'}
  ];
  const addUser=(user)=>{
    user.id=users.length+1;
    setusers([...users,user])
  }
  const deleteUser=(id)=>{
    setusers(users.filter((user)=>user.id!==id))
    setEditing(false)
  }
  const [users,setusers]=useState(UsersData);
  const [editing,setEditing]=useState(false);

  const initialState={id:null,name:'',username:''}
  const [currentUser,setCurrentUser] = useState(initialState);

  const editRow=(user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }
  const updateUser=(id,updateUser)=>{
    setEditing(false);
    setusers(users.map((user)=>(user.id===id?updateUser:user)))
  }
  return (
    <>
    <div className='container-fluid'>
      <div className="row mt-5">
        <h1>CRUD With React Hooks</h1>
        <div className="col-md-6 mt-5">
          {editing?(<div>
            <h2>Edit User</h2>
            <EditUser setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
          </div>):(<div>
          <h2>Add User</h2>
          <AddUser addUser={addUser}/>
            </div>)}
          
        </div>
        <div className="col-md-6 mt-5">
          <h2>View User</h2>
          <TableUser user={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
   
    </>
  );
}

export default App;
