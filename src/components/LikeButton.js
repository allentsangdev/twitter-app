import { useState } from "react"

function LikeButton() {

    const [likeCount, setLikeCount] = useState(0)

    return(
        <div className="like-button">
            <p>{likeCount} likes this</p>
            <button onClick={() => setLikeCount(likeCount + 1)}> Like </button>
        </div>
    )

}

export default LikeButton