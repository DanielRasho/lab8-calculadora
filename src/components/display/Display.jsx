import { useEffect, useState } from "react";
import './Display.css'

export default function Display({bigText, smallText, extraText ,maxLength}) {
    
    const [ displayBigText, setDisplayBigText ] = useState("")
    const [ displaySmallText, setDisplaySmallText ] = useState("")

    useEffect( ()=>{
        if( bigText || bigText === ''){
            if ( bigText.length > maxLength ){
                setDisplayBigText(bigText.substring(0, maxLength))
                console.log("BIG ENOUGH")
            }
            else
                setDisplayBigText(bigText)
        }
        if( smallText || smallText === ''){
            if ( smallText.length > maxLength )
                setDisplaySmallText(smallText.substring(0, maxLength))
            else
                setDisplaySmallText(smallText)
        }
            
    }, [bigText, smallText, extraText ,maxLength])

    return (
        <div className="displayContainer">
            <div className="bigText">{displayBigText}</div>
            <div className="secondName">
                <div className="extraText">{extraText}</div>
                <div className="smallText">{displaySmallText}</div>
            </div>
        </div>
    )
}

Display.defaultProps = {
    maxLength: undefined
}