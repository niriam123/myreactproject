import React, { useRef, useState } from 'react'

const Calculator = () => {
    const inputRef =  useRef(null);
    const resultRef  = useRef(null);
   
    const [result, setResult] = useState(0);
    
   function plus(e) {
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
   }
   function minus(e) {
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
   }
   function multiply(e) {
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
   }
   function devide(e) {
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
   }
   function resetInput(e) {
    e.preventDefault()
    inputRef.current.value = ''
   }
   function resetResult(e) {
    e.preventDefault()
    setResult((prevalue) => prevalue * 0)
   }
  return (
    <>
    <h2>Create a Calculator App</h2>
    <p ref={resultRef}>{result}</p>
    <input ref={inputRef} type='number' style={{"width":'300px', 'height': '50px'}} placeholder='type a number'></input>
    <button onClick={plus}>Add</button>
    <button onClick={minus}>Subtract</button>
    <button onClick={multiply}>Multiply</button>
    <button onClick={devide}>Devide</button>
    <button onClick={resetInput}>Reset Value</button>
    <button onClick={resetResult}>Reset result</button>
    </>
  )
}

export default Calculator