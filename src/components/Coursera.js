import React, { useState } from 'react'

const Coursera = () => {
    const handleClick = () => {
        let randomNum = Math.floor(Math.random()*3 + 1)
        console.log(randomNum) 
        let userInput = prompt('Type a number')
        alert(`Computed number: ${userInput} and guess number ${randomNum} `)
    }
    const [changevalue, setChangevalue] = useState('hey')
    
    const changeText = (e) => {
        console.log("bye")
        setChangevalue(e.target.value)
    }
    const [word, setWord] = useState("eat")
    const changeWord = () => {
        console.log('hey')
        setWord("Drink")
    }
    const [lighton, setlightOn] = React.useState("true")
    function toggleLight() {
       
        if(lighton) {
            console.log('light on true')
        }
        else {
            console.log('light is off')
        }
        setlightOn(prestate => !prestate)
       
        }
        const currentMessage = () => {
            const day = new Date().getDay()
            console.log(day)
            const weekday =  (day >= 1 && day <=5)
            const weekend =  (day >= 6 && day <=7)
            let messege;

            if (weekday) {
                console.log('weekday')
                 messege = 'weekday'
            }
            else if (weekend) {
                console.log('weekend')
                 messege = 'weekend'
            }
            return messege;
        }
        let name;
        let newuser = true;
        if(Math.random() > 0.5 && newuser) {
             name = 'ritu'
        }
        else {
             name = 'yogesh'
        }
        const LogOutBtn = () => <div>Logout</div>
        const LogInBtn = () => <div>LogIn</div>
        const loggedInOutBtn = (props) => {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                console.log('logout')
                return <LogOutBtn />
               
            }
            else {
                return <LogInBtn />
            }
        }

        const time = new Date();
        console.log(time)
        const day = time.toLocaleString("en-us", {weekday: "long"})
        console.log(day)
        const morning = time.getHours() >= 6 && time.getHours() <= 12
        console.log(morning)
        let dayMessage;

        if(day.toLowerCase() === "monday") {
            dayMessage = `Happy ${day}`
        }
        else if(day.toLowerCase() === "tuesday") {
            dayMessage = `${day} For a weekend 4 days to wait`
        }
        else if(day.toLowerCase() === "wednesday") {
            dayMessage = `${day} still half times`
        }
        else if(day.toLowerCase() === "thursday") {
             dayMessage = `${day} start planning the weekend`
        }
        else if(day.toLowerCase() === "friday") {
            dayMessage = `${day} woo ho weekend is coming`
       }
       else {
        dayMessage = `stay calm and having fun`
       }

       const song1 = new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3")
       const song2 = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3")

       const playSong1 = () => {
        if(song1.paused) {
            song1.play()
        }
        else {
            song1.pause()
        }
       }
       const playSong2 = () => {
        if(song2.paused) {
            song2.play()
        }
        else {
            song2.pause()
        }
       }
  return (
    <>
    <h1>Add a Button and handle a click event</h1>
    <p>let a number generate from 1 to 3</p>
    <button onClick={handleClick}>guess a number between 1 to 3</button>
    <input value={changevalue} onChange={changeText}></input>
    <p>You typed {changevalue}</p>

    <p>{word} 2 mango</p>
    <button onClick={changeWord}>check what you eat</button>
    <p>{lighton}</p>
    <button onClick={toggleLight}>toggle switch</button>
    {currentMessage()}
    {name}
    {loggedInOutBtn({ isLoggedIn: false })}
    <h2>{dayMessage}</h2>
    <h3>{morning ? 'Have You had the breakfast yet' : ''}</h3>
    <button onClick={playSong1}>Song1</button>
    <button onClick={playSong2}>Song2</button>
    </>
  )
}

export default Coursera