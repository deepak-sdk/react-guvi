import React from "react";


export const Msg = () => {
    const users = [
        { name: "DK", pic: "https://cdn.onlinewebfonts.com/svg/img_24787.png" },
        {
            name: "Got it",
            pic: "https://i.etsystatic.com/15971018/r/il/14c008/1957171418/il_794xN.1957171418_r3wl.jpg",
        },
    ];
    return (
        <div>
            <h1>Hello React.</h1>
            {/* passing value to the props */}
            {/* <Msg name="Got It" /><Msg name="DK" /> */}
            {/* Transforming - Array of String to Array of JSX */}
            {/* Working with array of obj 01-11-2021*/}

            {users.map((value) => (
                <Msg name={value.name} pic={value.pic} />
            ))}

            {/* <div className="user-container">
                <img
                    className="user-pic"
                    src={pic}
                    aria-hidden
                    alt="user-profile--picture"
                />
                <h2 className="user-msg">Lets Start - {name}</h2>
            </div> */}
            {/* let name = "DK"; console.log({name}); */}
        </div>
    );
};


