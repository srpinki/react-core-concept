const Post = ({post}) => {
    const {title, body} = post;
    
    return (
        <div className="card">
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>
        </div>
    )
}

export default Post