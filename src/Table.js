



const TableUser = (props) => {

    return (
        <div className="container mt-3">

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user.length > 0 ? (
                        props.user.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button type="button" onClick={()=>props.editRow(user)} className="btn btn-outline-secondary">Edit</button>
                                    <button type="button" onClick={()=>props.deleteUser(user.id)} className="btn btn-outline-secondary">Delete</button>
                                </td>

                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )}


                </tbody>
            </table>
        </div>
    )
}
export default TableUser;