// hook is function - starts with use keyword
import React, { useState } from "react";
import './counter.css'

export default function Counter() {
    // 02-11-2021
    // let like = 10;
    // const [state, setState] = useState(IntialValue)
    // state = current scenario = current data
    // state = variable , setState = React state is changed -> re-render(updating)
    // render = showing on the screen;

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div>
            <button
                onClick={() => {
                    setLike(like + 1);
                }}>
                Like👍{like}{" "}
            </button>

            <button
                onClick={() => {
                    setDislike(dislike + 1);
                }}>
                Dislike👎{dislike}
            </button>
        </div>
    );
}
editUserForm.style.display =
    editUserForm.style.display === "block" ? "none" : "block";