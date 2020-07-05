import React, { useState } from 'react'
import * as types from './constants/portfolioTypes'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function Root() {
  const [filter, setFilter] = useState(types.ALL)

  return (
    <div id="container">
      <Navigation />

      <Header />
      <Skills filter={filter} setFilter={setFilter} />
      <Portfolio filter={filter} />
      <Resume />
      <Contact />
    </div>
  )
}
