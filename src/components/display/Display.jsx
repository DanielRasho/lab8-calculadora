import { useEffect, useState } from "react";

export default function Display({text, maxLength}) {
    
    const [ displayText, setDisplayText ] = useState("")

    useEffect( ()=>{
        if( text ){
            if ( text.length > maxLength )
                setDisplayText(text.substring(0, maxLength))
            else
                setDisplayText(text)
        }
            
    }, [text, maxLength])

    return (
        <div>{displayText}</div>
    )
}

Display.defaultProps = {
    maxLength: undefined
}