import { use } from "react";

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers);
    
    return(
        <div className="card">
            <h2>Users: {users.length}</h2>
        </div>
    )
    
}

export default Users