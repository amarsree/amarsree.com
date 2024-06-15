// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
      <div className="container">
        <h1>Amar's Terminal</h1>
       {/* <div className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
        </div>  */}
        <div className="content" id="about">
            <h2>About</h2>
            {/* <p><span className="syntax-key">I'm</span> <span className="syntax">Amar</span>, <span className="syntax-key">a</span> <span className="syntax">software developer</span> <span className="syntax-key">interested</span> <span className="syntax-key">in</span> <span className="syntax">problem-solving</span>. <span className="syntax-key">I</span> <span className="syntax-key">have</span> <span className="syntax-key">been</span> <span className="syntax-key">in</span> <span className="syntax-key">the</span> <span className="syntax">software industry</span> <span className="syntax-key">for</span> <span className="syntax">the last 5 years</span>.</p>  */}
            <p className="syntax-key">Hello! I'm Amar, a <span className="syntax-string">software developer</span> with over <span className="syntax-string">five years</span> of experience in the software industry. My passion lies in <span className="syntax-string">problem-solving</span> and building complex solutions that drive innovation. I'm constantly eager to learn new technologies and methodologies to enhance my skill set and stay ahead in this fast-paced industry.</p>
            <p className="syntax-key">
                Whether it's developing <span className="syntax-string">robust applications</span>, tackling <span className="syntax-string">intricate challenges</span>, or exploring the latest <span className="syntax-string">trends in technology</span>, I am always enthusiastic about taking on new projects and pushing the boundaries of what's possible. I'm a firm believer in the power of <span className="syntax-string">technology</span> to transform businesses and improve people's lives, and I'm committed to leveraging my skills to make a <span className="syntax-string">positive impact</span> in the world.
            </p>
            
                
        </div>
       {/* <div className="content" id="projects">
            <h2>Projects</h2>
            <p><span className="syntax-key">Here</span> <span className="syntax-key">you can showcase your projects</span>. <span className="syntax-key">Add descriptions and links to your projects here</span>.</p>
        </div>
        <div className="content" id="blog">
            <h2>Blog</h2>
            <p><span className="syntax-key">This</span> <span className="syntax-key">is where you can share your thoughts</span>, <span className="syntax-key">articles</span>, <span className="syntax-key">and</span> <span className="syntax">tutorials</span>. <span className="syntax-key">Start writing your blog posts here</span>.</p>
        </div>  */}
        <div className="content" id="contact">
            <h2>Contact</h2>
            <p><span className="syntax-key">Feel free to reach out to me</span>. <span className="syntax-key">You can contact me at</span>:</p>
            <ul>
                <li><span className="syntax-key">Email</span>: <a href="mailto:amarsree007@gmail.com"><span className="syntax-string">amarsree007@gmail.com</span></a></li>
                <li><span className="syntax-key">LinkedIn</span>: <a href="https://www.linkedin.com/in/amar-sree/" target="_blank"><span className="syntax-string">linkedin.com/in/amar-sree</span></a></li>
                <li><span className="syntax-key">GitHub</span>: <a href="https://github.com/amarsree" target="_blank"><span className="syntax-string">github.com/amarsree</span></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default App
