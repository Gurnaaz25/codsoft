import React from 'react'
import Navbar from './components/navbar'
import Contact from './components/sections/contact'
import Projects from './components/sections/projects'
import About from './components/sections/about'
import Slider from './components/sections/slider'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <div className="pt-16"> {/* Padding for fixed navbar */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Frontend Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting beautiful and functional web experiences
            </p>
            <a 
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
        <Slider/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
