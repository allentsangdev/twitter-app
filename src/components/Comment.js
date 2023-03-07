import { useState, useRef } from "react"
import Timer from "./Timer"

function Comment() {
    
    // useState hook to update the comment session
    const [comments, setComment] = useState([])
    // useRef hook to clear the input box value after posting comment
    const textInput = useRef("")
    const resetInput = () => (textInput.current.value="")
    
    function postComment() {
        let inputComment = document.querySelector("#input-comment").value
        setComment([...comments, inputComment])
        resetInput()
    }

    return (
        <div className="comment-session">
            {comments && comments.map(comment =>(
                <div id="time-comment">
                    <Timer/>
                    <p key={"key"}>{comment}</p>
                </div>
                ))}
            <div>
                <input type="text" id="input-comment" ref={textInput}/>
                <button onClick={postComment}> Post </button>
            </div>
        </div>
    )
}

export default Comment