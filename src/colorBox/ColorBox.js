import React, { useState } from "react";
import Button from '@mui/material/Button';

export function ColorBox() {
    const [color, setColor] = useState("");

    const styles = { backgroundColor: color };
    const [colors, setColors] = useState([]);
    return (
        <div>
            <input
                value={color}
                onChange={(event) => setColor(event.target.value)}
                style={styles}
                placeholder="Enter the Color"
            />
            {/* copy color list and add new color */}
            <Button variant="outlined" onClick={() => setColors([...colors, color])}>ADD</Button>
            {colors.map((e, index) => (
                <ColorList color={e} key={index} />
            ))}
        </div>
    );
}

function ColorList({ color }) {
    const styles = {
        backgroundColor: color,
        height: "25px",
        width: "250px",
        marginTop: "10px",
    };
    return <div style={styles}></div>;
}
