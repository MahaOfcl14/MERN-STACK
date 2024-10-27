import React from "react"
import ReactDOM from "react-dom"

//Creating elemnts<h1>hrllo</h1>
//History --Old 
const paragraphElement = React.createElement("h1",null,"Hello World")
const headelement = <h1>Heyyyy</h1> //JSX Way of creating elements
const root = document.getElementById("root")
//Rendering the content from DOM
ReactDOM.render(paragraphElement,root) // root - where to render
//Day 3
//Function
function add(a,b){
    console.log(a+b)
}
add(14,17)

//Arrow fn
const add = (a,b) =>{
    return(
        console.log(a+b)
    )
}
//Components (Header - functional component, header - doesn't consider as Fnctnl comp)
const Header = () => {
    return (
       

            <p>Helloo</p>
       


    )}
ReactDOM.render(<Header/>,root)
