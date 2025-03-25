const Friend = ({friend}) => {
    const {name, email, phone} = friend;
    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
        </div>
    )
}

export default Friend