import React from "react"
import { Link } from "gatsby"

export default () => 
    <div style={{ color: `purple` }}>
        <Link to="/contact/">contact</Link>
        <Link to="/about/"> about</Link>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        {/* <PrimaryButton>Click me</PrimaryButton> */}
    </div>
