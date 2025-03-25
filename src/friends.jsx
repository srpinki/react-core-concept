import Friend from "./friend"
import { use } from "react"

const Friends = ({friendsPromise}) => {
    const friends = use(friendsPromise);
    
    return (
        <div className="card">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
            }
        </div>
    )
}

export default Friends