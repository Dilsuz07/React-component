import React from "react";
import Languages from "./Languages";

const Nav = () => {
    return (
        <>
            <h3>React</h3>
            <ul>
                <li>Docs</li>
                <li>Tutorial</li>
                <li>Blog</li>
                <li>Comminity</li>
            </ul>
            <Languages
                ing = 'English'
                ru = 'Russian'
            />
        </>
    )
}

export default Nav