import React from "react";
import Zero from "./0-Zero";

export default function One ({row}) { //each row with 9 squares

    return (
        <div>
            {row && row.length > 0 && row.map((r, i) => <Zero key={i} unity={r} /> )}
        </div>
    )
} 