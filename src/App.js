import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Hobby from './components/Hobby'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function Root() {
  return (
    <div id="container">
      <Navigation />
      <Header />
      <Hobby />
      <Resume />
      <Contact />
    </div>
  )
}
