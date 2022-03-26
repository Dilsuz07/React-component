import React from "react";
import Home from "./Home";

const About = () => {
    return (
        <>
            <h1>
              Create a New React App
            </h1>
            <p>
              When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up! As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.
            </p>
            <Home
                hello = 'Hello'
                world = 'World'
            />
        </>
    )
}
export default About;