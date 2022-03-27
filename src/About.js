import React from "react";
import Home from "./Home";
import img from './image/fon_3.jpg'

let header1 = document.querySelector('.header1')



// btn.addEventListener('click', () => {
//   header1.style.display = 'none'
// })

const About = () => {
    return (
        <>
            <h1 className="header1">
              Create a New React App
            </h1>
            <button className="delete" onClick={()=> {
              header1.style.display = 'none'
            }}>Delete</button>
            <p>
            
            <button className="insert" onClick={() => {
               header1.style.display = 'block'
            }}>Insert</button>
              When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up! As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.
            </p>
            <img src={img}></img>
            <Home
                hello = 'Hello'
                world = 'World'
            />
        </>
    )
}
export default About;