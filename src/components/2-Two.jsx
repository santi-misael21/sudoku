import React from "react";
import One from "./1-One";

export default function Two({rows,}) { //9 rows con 9 squares cada una  
    
    return (
        <div>
            {rows && rows.length > 0 && rows.map((r, i)=> <One key={i} row={r}/>)}
        </div>
    )
} 