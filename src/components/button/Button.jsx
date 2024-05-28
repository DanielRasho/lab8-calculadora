import { useEffect, useState } from 'react'
import './Button.css'

export default function Button({text, onClick, style, keystroke}) {
    
    const [displayText, setDisplayText] = useState('')
    const [isHoverStyle, setIsHoverStyle] = useState(false)
    const [isActiveStyle, setIsActiveStyle ] = useState(false)
    
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            handleKeyPress(event)
        })
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    } , [])
    
    useEffect(() => {
        if( text ){
            if ( text.length > 5 )
                setDisplayText(text.substring(0, 5 - 3) + "...")
            else
                setDisplayText(text)
        }
    }, [text])

    const handleClick = () => {
        setIsActiveStyle(true)
        setTimeout(() => {setIsActiveStyle(false)}, 100)
        onClick()
    }
    
    const handleMouseEnter = () => {
        setIsHoverStyle(true)
    }
    
    const handleMouseLeave = () => {
        setIsHoverStyle(false)
    }

    const handleKeyPress = async (event) => {
        if (event.keyCode === keystroke) {
            console.log(event.code)
            handleClick()
        }
    }
    
    return ( 
    <button 
        className={`btn ${isHoverStyle ? 'btn-hover' : ''} ${isActiveStyle ? 'btn-active' : ''}`} 
        style={style}
        onClick={handleClick} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
        {displayText}
    </button>
    )
}