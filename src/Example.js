import React from "react";

export default function Example(props){
    if(props.example){
        return (
            <div className="Example">
                <b>Example: </b>
                <span>{props.example}</span>
            </div>
        )
        } else {
            return null
    }  
}