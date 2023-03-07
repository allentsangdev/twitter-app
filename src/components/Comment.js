import { useState, useRef } from "react"
import LikeButton from "./LikeButton"
import Timer from "./Timer"

function Comment(props) {
    
    // assign an unique id for each comment input box html element
    const key = `input-comment-${props.idKey}`
    // useState hook to update the comment session
    const [comments, setComment] = useState([{}])
    // useRef hook to clear the input box value after posting comment
    const textInput = useRef("")
    const resetInput = () => (textInput.current.value="")
    
    function postComment() {
        let inputComment = document.querySelector(`#${key}`).value
        
        setComment((prevState) => ([...prevState, {
            timeStamp: <Timer/>,
            comment: inputComment,
            likeButton: <LikeButton/>
        } ]))
        
        resetInput()
    }

    function EnterKeyListener(e) {
        if (e.key === "Enter") {
            postComment()
        }
    }

    return (
        <div className="comment-session">
            {comments && comments.map(comment =>(
                <div className="time-comment-like">
                    {comment.timeStamp}
                    <p>{comment.comment}</p>
                    {comment.likeButton}
                </div>
                ))}
            <div>
                <input type="text" id={key} ref={textInput} onKeyDown={EnterKeyListener}/>
                <button onClick={postComment}> Post </button>
            </div>
        </div>
    )
}

export default Comment