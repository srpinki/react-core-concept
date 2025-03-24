function Home ({task, isDone, time = 0}) {
    if (isDone === true) {
        return(
            <p>Done: {task}. Time: {time}</p>
        )
    } else {
        return(
            <p>Pending: {task}</p>
        )
        
    }
}

export default Home