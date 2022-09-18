import React from "react";
import Four from "./4-Four";

export default function Three({row, rows, module}) { //each row with 9 squares

    console.log(rows)

    return (
        <div> 
            {row && row.length > 0 && row.map((r, i) => <Four key={i} rows={rows} unity={r} loyalindex={module[i]}/> )}
        </div>
    )
} 