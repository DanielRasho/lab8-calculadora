import './Calculator.css'
import Button from '../button/Button'
import Display from '../display/Display'
import { useState } from 'react'

export default function Calculator() {
    
    const [ pastValue, setPastValue ] = useState("")
    const [ operator, setOperator ] = useState("")
    const [ currentValue, setCurrentValue] = useState("")

    const handleCalculation = () => {
        console.log(pastValue + operator + currentValue)
        if( !pastValue || !operator || !currentValue ) {
            return
        }

        let NewValue = eval( pastValue + operator + currentValue)
        
        if (NewValue < 0 ) {
            setPastValue("ERR:NEGATIVE")
        } 
        else {
            setPastValue(String(NewValue))
        }
        setCurrentValue("")
        setOperator("")
    }
    
    const appendCharacter = (character) => {
        console.log(currentValue + character)
        setCurrentValue( currentValue + character )
    }

    const removeCharacter = () => {
        setCurrentValue( currentValue.substring(0, currentValue.length - 1))
    }

    const clearCalc = () => {
        console.log("cleaning")
        setCurrentValue('')
        setOperator("")
        setPastValue("")
    }
    
    const setNextOperation = (operator) => {
        if (pastValue === "") {
            setPastValue(currentValue)
            setCurrentValue("")
        } 
        setOperator(operator)
    }
    
const buttons = [
    {
        text: "AC",
        gridArea: "AC",
        onClick: () => { clearCalc() }
    },
    {
        text: "CE",
        gridArea: "CE",
        onClick: () => { removeCharacter() },
        keystroke: 127
    },
    {
        text: "/",
        gridArea: "division",
        onClick: () => { setNextOperation("/") },
        keystroke: 191
    },
    {
        text: "7",
        gridArea: "seven",
        onClick: () => { appendCharacter("7")},
        keystroke: 55 // ASCII for '7'
    },
    {
        text: "8",
        gridArea: "eight",
        onClick: () => { appendCharacter("8") },
        keystroke: 56 // ASCII for '8'
    },
    {
        text: "9",
        gridArea: "nine",
        onClick: () => { appendCharacter("9") },
        keystroke: 57 // ASCII for '9'
    },
    {
        text: "-",
        gridArea: "dash",
        onClick: () => { setNextOperation("-") },
        keystroke: 45 // ASCII for '-'
    },
    {
        text: "4",
        gridArea: "four",
        onClick: () => { appendCharacter("4") },
        keystroke: 52 // ASCII for '4'
    },
    {
        text: "5",
        gridArea: "five",
        onClick: () => { appendCharacter("5") },
        keystroke: 53 // ASCII for '5'
    },
    {
        text: "6",
        gridArea: "six",
        onClick: () => { appendCharacter("6") },
        keystroke: 54 // ASCII for '6'
    },
    {
        text: "+",
        gridArea: "plus",
        onClick: () => { setNextOperation("+") },
        keystroke: 43 // ASCII for '+'
    },
    {
        text: "1",
        gridArea: "one",
        onClick: () => { appendCharacter("1")},
        keystroke: 49 // ASCII for '1'
    },
    {
        text: "2",
        gridArea: "two",
        onClick: () => { appendCharacter("2")},
        keystroke: 50 // ASCII for '2'
    },
    {
        text: "3",
        gridArea: "three",
        onClick: () => { appendCharacter("3") },
        keystroke: 51 // ASCII for '3'
    },
    {
        text: "0",
        gridArea: "zero",
        onClick: () => { setOperator("0") },
        keystroke: 48 // ASCII for '0'
    },
    {
        text: "=",
        gridArea: "equals",
        onClick: () => { handleCalculation() },
        keystroke: 13 // ASCII for '='
    }
];

    return (
        <div className='calculator' >
        <Display 
            bigText={pastValue} 
            smallText={currentValue} 
            extraText={operator} 
            maxLength={9}/>
        <div className='buttons'>
        { 
            buttons.map((btn, index)=> {
                return (
                    <Button 
                        text={btn.text} 
                        style={{ gridArea : btn.gridArea, width: "100%"}}
                        onClick={btn.onClick}
                        keystroke={btn.keystroke}
                        key={index}/>
                )
            })
        }
            </div>
        </div>
    )
}