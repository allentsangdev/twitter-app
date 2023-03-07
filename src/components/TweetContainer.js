import Comment from "./Comment"

function TweetContainer(props) {
    
    const message = props.tweetMessage
    
    return (
        <div className="tweet-container">
            <h2>{message}</h2>
            <Comment/>
        </div>
    )
}

export default TweetContainer