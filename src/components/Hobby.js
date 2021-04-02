import React, { useState } from 'react'
import * as sources from '../constants/sourceTypes'
import portfolioItems from '../data/portfolioItems'
import PortfolioItem from './HobbyItem'
import Skills from './Skills'

export default function Hobby() {
  const [filter, setFilter] = useState(sources.ALL)

  return (
    <section id="hobby">
      <h1>Hobby Projects</h1>
      <Skills filter={filter} setFilter={setFilter} />
      {portfolioItems
        .filter(
          item =>
            filter === sources.ALL ||
            item.sources.some(source => source.type === filter) ||
            item.techs.some(tech => tech === filter)
        )
        .map(item => (
          <PortfolioItem key={item.title} data={item} />
        ))}
    </section>
  )
}
