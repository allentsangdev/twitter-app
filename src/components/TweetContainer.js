import Comment from "./Comment"

function TweetContainer(props) {
    
    const message = props.tweetMessage
    const idKey = props.idKey
    return (
        <div className="tweet-container">
            <h2>{message}</h2>
            <Comment idKey={idKey}/>
        </div>
    )
}

export default TweetContainer