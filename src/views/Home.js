import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

import bentleyProfile from '../img/bentleyProfile.jpeg'
import Social from '../components/Social.js'

const Home = () => (
    <div className = 'view_div home'>
        <img src={bentleyProfile} className="profilepic" alt="A profile picture of Jeffrey Bentley"></img>
        <br></br>
        <ReactTypingEffect className="typingeffect" text={['Hello, I am Jeffrey Bentley.','I am a Software Engineer.']} speed={100} eraseDelay={700}/>
        <Social />
    </div>
)

export default Home
