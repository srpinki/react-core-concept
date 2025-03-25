import Post from "./post"
import { use } from "react"

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise)

    return (
        <div className="card">
            <h2>All Posts here: {posts.length}</h2>
            {
               posts.map(post => <Post key={post.id} post = {post}></Post>) 
            }
        </div>
    )
}

export default Posts