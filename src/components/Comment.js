import { useState, useRef } from "react"
import Timer from "./Timer"

function Comment() {
    
    // useState hook to update the comment session
    const [comments, setComment] = useState([{}])
    // useRef hook to clear the input box value after posting comment
    const textInput = useRef("")
    const resetInput = () => (textInput.current.value="")
    
    function postComment() {
        let inputComment = document.querySelector("#input-comment").value
        
        setComment((prevState) => ([...prevState, {
            timeStamp: <Timer/>,
            comment: inputComment
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
                <div id="time-comment">
                    {comment.timeStamp}
                    <p key={"key"}>{comment.comment}</p>
                </div>
                ))}
            <div>
                <input type="text" id="input-comment" ref={textInput} onKeyDown={EnterKeyListener}/>
                <button onClick={postComment}> Post </button>
            </div>
        </div>
    )
}

export default Comment